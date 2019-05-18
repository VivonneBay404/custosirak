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

export const setWasBuildingTrue = () => {
    return {
        type: actionTypes.SET_WAS_BUILDING_TRUE
    }
}

export const setWasBuildingFalse = () => {
    return {
        type: actionTypes.SET_WAS_BUILDING_FALSE
    }
}
export const setDiffAddr = (event) => {
    return {
        type: actionTypes.SET_DIFF_ADDR,
        diffAddr: event.target.value
    }
}