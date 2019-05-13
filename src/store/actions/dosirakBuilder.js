import * as actionTypes from '../actions/actionTypes'

export const menuClicked = (updatedMenu, totalPrice) => {
    return {
        type: actionTypes.MENU_CLICKED,
        updMenu: updatedMenu,
        totalPrc: totalPrice
    }
}
export const orderSubmitted = () => {
    return {
        type: actionTypes.STORE_INITIALIZE
    }
}