import * as actionTypes from './actionTypes'
import axios from 'axios'
import axiosUsers from '../../axios-instance/axios-users'

export const authSuccess = (idToken, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: localId
    }
}

export const authFailed = (errorData) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: errorData
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authThenFuncs = (dispatch, response) => {
    dispatch(getUserInfo(response.data.localId))
    //date object로 만듬
    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
    localStorage.setItem('token', response.data.idToken)
    localStorage.setItem('expirationDate', expirationDate)
    localStorage.setItem('userId', response.data.localId)
    dispatch(authSuccess(response.data.idToken, response.data.localId))
    dispatch(checkAuthTimeout(response.data.expiresIn))
}

export const auth = (email, password, authWay, formData) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        //기본은 회원가입 url
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB2JMNlSGknDULv81ODdTD71g6MblNImXk'
        //param이 login이면 로그인 url
        if (authWay === 'login') {
            authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB2JMNlSGknDULv81ODdTD71g6MblNImXk'
        }
        axios.post(authUrl, authData)
            .then(response => {
                //회원가입이면 database의 users에 저장
                if (authWay === 'signup') {
                    axiosUsers.post('.json', { ...formData, 'userId': response.data.localId })
                        .then(responseSignup => {
                            authThenFuncs(dispatch, response)
                        })
                        .catch(errorSignup => {

                        })
                } else {
                    authThenFuncs(dispatch, response)
                }
            })
            .catch(error => {
                dispatch(authFailed(error.response.data.error))
            })
    }
}

export const authCleanupError = () => {
    return {
        type: actionTypes.AUTH_CLEANUP_ERROR
    }
}



export const getUserInfoStart = () => {
    return {
        type: actionTypes.GET_USER_INFO_START
    }
}
export const getUserInfoFailed = (error) => {
    return {
        type: actionTypes.GET_USER_INFO_FAILED,
        error: error
    }
}
export const getUserInfoSuccess = (userName, homeAddress) => {
    return {
        type: actionTypes.GET_USER_INFO_SUCCESS,
        userName: userName,
        homeAddress: homeAddress
    }
}

export const getUserInfo = (userId) => {
    return dispatch => {
        dispatch(getUserInfoStart())
        const queryParams = '?orderBy="userId"&equalTo="' + userId + '"'
        axiosUsers.get('.json' + queryParams)
            .then(response => {
                const userData = response.data
                let updatedUserData = {}
                for (const userDBId in userData) {
                    updatedUserData = {
                        name: userData[userDBId].이름,
                        homeAddress: userData[userDBId].집주소
                    }

                }
                dispatch(getUserInfoSuccess(updatedUserData.name, updatedUserData.homeAddress))
            })
            .catch(error => {
                dispatch(getUserInfoFailed(error))
            })
    }

}




export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
// 일정시간이 지나면 로그아웃되는 액션
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }

}

// 새로고침해도 localStorage에 token이 있다면 다시 로그인하게해주는 actionCreater
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        //token === null
        if (!token) {
            dispatch(logout())
        } else {
            //Date object로 만들기
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(getUserInfo(userId))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }

        }
    }
}
