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
export const getOrdersFailed = () => {
    return {
        type: actionTypes.GET_ORDERS_FAILED
    }
}


//middleware
//firebase에서 주문정보 가져오기
export const getOrders = () => {
    return dispatch => {
        dispatch(getOrdersStart())
    
        axiosOrders.get('.json')
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
                            price: ordersData[orderID].price
                        }
                    )

                }
               dispatch(getOrdersSuccess(ordersArr))
            }
            )
            .catch(error => {
                dispatch(getOrdersFailed(error))
            })
    }
}