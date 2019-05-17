import React, { Component } from 'react'
import classes from './Order.css'
import Button from '../../../UI/Button/Button'
import axios from '../../../axios-instance/axios-orders'


class Order extends Component {

    state = {
        deleting: false
    }
   

    orderCancelHandler = (orderID,getOrders) => {
        this.setState({ deleting: true })
        axios.delete(orderID + '.json?auth='+this.props.token)
            .then(response => {
                console.log(response)
               
                //내 주문을 update하기위해
               getOrders(this.props.token,this.props.userId)
               this.setState({ deleting: false})
            })
            .catch(error => {
                console.log(error)
            })
               
            
    }

    render() {

        let deleteInfo = '삭제'
        if (this.state.deleting) {
            deleteInfo = '삭제중...'
        }
        let items = this.props.items
        items = items.map(e => {
            return <div className={classes.Item}>{e}</div>
        })
        return (
            
            
            <div className={classes.Order}>
                <div className={classes.OrderID}>주문번호:{this.props.orderID}</div>
                선택한 아이템:
                <div className={classes.Items}>{items}</div>
                <div className={classes.Price}>총 가격: {this.props.price}원</div>
                <Button btnType='Cancel' clicked={() => this.orderCancelHandler(this.props.orderID,this.props.getOrders)}>{deleteInfo}</Button>
            </div>
            
        )
    }

}

export default Order