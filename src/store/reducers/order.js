import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionTypes.GET_ORDERS_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default reducer