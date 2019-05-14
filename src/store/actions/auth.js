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

export const authFailed = () => {
    return {
        type: actionTypes.AUTH_FAILED

    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
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
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB2JMNlSGknDULv81ODdTD71g6MblNImXk'
        if (authWay === 'login') {
            authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB2JMNlSGknDULv81ODdTD71g6MblNImXk'
        }
        axios.post(authUrl, authData)
            .then(response => {
                dispatch(authSuccess(response.data))
                console.log(response)
            })
            .catch(error => {
                dispatch(authFailed())
                console.log(error)
            })




    }
}
