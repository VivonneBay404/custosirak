import React, { Component } from 'react';
import classes from './Orders.css'
import axios from '../../axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import Order from '../Orders/Order/Order'

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        deleting: false
    }

    //firebase에 있는 orders를 가져는 method
    getOrders = () => {
        let ordersArr = [];
        axios.get('.json')
            .then(response => {
                //database에서 가져온 data
                const ordersData = response.data
                console.log(ordersData)
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
                console.log(ordersArr)
                this.setState({ loading: false, orders: ordersArr })
            }
            )
            .catch(error => {

            })
    }
    componentDidMount() {
        this.getOrders()
    }


    //오더를 삭제하는 method
    orderCancelHandler = (orderID) => {
        this.setState({ deleting: true })
        axios.delete(orderID + '.json')
            .then(response => {
                console.log(response)
                this.setState({ deleting: false })
                //내 주문을 update하기위해
                this.getOrders()
            })
    }

    render() {

        let ordersInfo = null
        if (this.state.loading) {
            ordersInfo = <Spinner />
        } else {
            ordersInfo = this.state.orders.map((e) => {
                return <Order key={e.key}
                    price={e.price}
                    items={e.items}
                    orderID={e.key}
                    canceled={() => this.orderCancelHandler(e.key)}
                    deleting={this.state.deleting}
                    ></Order>
            })
        }

        return (
            <>
                <div className={classes.Orders}>
                    내 주문
                    <div>
                        {ordersInfo}
                    </div>
                </div>
            </>
        )

    }
}

export default Orders