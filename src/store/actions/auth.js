import * as actionTypes from './actionTypes'
import axios from 'axios'


//action creators
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: authData.idToken,
        userId: authData.localId
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

export const logout = () => {
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

export const auth = (email, password, authWay) => {
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
                dispatch(authSuccess(response.data))
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(error => {
                dispatch(authFailed(error.response.data.error))
            })




    }
}
