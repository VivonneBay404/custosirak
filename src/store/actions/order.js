import * as actionTypes from './actionTypes'
import axiosOrders from '../../axios-instance/axios-orders'

//actionCreators
export const getOrdersStart = () => {
    return {
        type: actionTypes.GET_ORDERS_START
    }
}
export const getOrdersSuccess = (orders) => {
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        orders: orders
    }
}
export const getOrdersFailed = (error) => {
    return {
        type: actionTypes.GET_ORDERS_FAILED,
        error: error
    }
}



//firebase에서 주문정보 가져오기
export const getOrders = (token, userId) => {
    return dispatch => {
        dispatch(getOrdersStart())
        //userId가 같은 주문만 가져오기
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId +'"'
        axiosOrders.get('.json'+ queryParams)
            .then(response => {
                let ordersArr = [];
                //database에서 가져온 data
                const ordersData = response.data
                //orderArr에 커스터마이징한 key,value 오브젝트 넣기
                for (const orderID in ordersData) {
                    ordersArr.push(
                        {
                            key: orderID,
                            items: ordersData[orderID].items,
                            price: ordersData[orderID].price,
                            deliveryAddress: ordersData[orderID].deliveryAddress
                        }
                    )

                }
               dispatch(getOrdersSuccess(ordersArr))
            }
            )
            .catch(error => {
                dispatch(getOrdersFailed(error.response.data.error))
            })
    }
}