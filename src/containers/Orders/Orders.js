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
        this.props.onGetOrders()
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
                    getOrders={this.props.onGetOrders}
                ></Order>
            })
        }

        return (
            <div className={classes.Orders}>
                <div className={classes.Title}>내 주문</div>
                {ordersInfo}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
       orders: state.orders.orders,
       loading: state.orders.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetOrders: () => dispatch(actions.getOrders())
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axiosOrders ) );