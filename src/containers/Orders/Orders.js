import React, { Component } from 'react';
import classes from './Orders.css'
import axiosOrders from '../../axios-instance/axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import Order from '../Orders/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Orders extends Component {

    //firebase에 있는 orders를 가져는 method
    
    componentDidMount() {
        this.props.onGetOrders(this.props.token,this.props.userId)
    }

    

    render() {

        let ordersInfo = null
        if (this.props.loading) {
            ordersInfo = <div className={classes.Spinner}><Spinner /></div>
        } else {
            ordersInfo = this.props.orders.map((e) => {
                return <Order key={e.key}
                    price={e.price}
                    items={e.items}
                    orderID={e.key}
                    getOrders={() => this.props.onGetOrders(this.props.token,this.props.userId)}
                    token = {this.props.token}
                    userId={this.props.userId}
                ></Order>
            })
        }
        let errorMessage = null
        if(this.props.error){
            console.log(this.props.error)
            errorMessage = <p>주문을 불러올수없습니다.</p>
        }

        return (
            <div className={classes.Orders}>
                <div className={classes.Title}>내 주문</div>
                {errorMessage}
                {ordersInfo}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
       orders: state.orders.orders,
       loading: state.orders.loading,
       error: state.orders.error,
       token: state.auth.token,
       userId: state.auth.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetOrders: (token,userId) => dispatch(actions.getOrders(token,userId))
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axiosOrders ) );