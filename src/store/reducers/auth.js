import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    userName: null,
    homeAddress: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                // loading: false,
              
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                userName: null,
                homeAddress: null
            }
            case actionTypes.AUTH_CLEANUP_ERROR:
            return {
                ...state,
                error: null
            }
        case actionTypes.GET_USER_INFO_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.GET_USER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userName: action.userName,
                homeAddress: action.homeAddress
            }
        default:
            return state
    }
}

export default reducer