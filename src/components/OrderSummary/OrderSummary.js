import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from '../OrderSummary/OrderSummary.css';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('ordersummary updated')
    }
    
    render() {
        console.log('orderSummary render')
        const selectedItems = this.props.selectedItems;
        let selectedItemNames = []
        selectedItems.map(e => {
            return selectedItemNames.push(e.name)
        })

        //선택된 아이템을 여러줄로 표시하기위한 map
        let selectedItemList = [];
        selectedItemList = selectedItemNames.map(e => {
            return (
                <div className={classes.SelectedItems} key={e}>{e}</div>
            )
        })
       
        let orderSummary = null
       
           orderSummary= <div className={classes.OrderSummary}>
                <div className={classes.HeadLine}>주문내역</div>
                {selectedItemList}
                <div className={classes.Price}>총가격: {this.props.totalPrice}</div>
                <p>주문하시겠습니까?</p>
                <div className={classes.BtnContainer}>
                    <Button btnType='Cancel' clicked={this.props.canceled}>아니오</Button>
                    <Button btnType='Enter' clicked={this.props.confirmed}>기본주소로 주문하기</Button>
                    <Button btnType='Enter' clicked={this.props.changeToDiff}>다른주소로 주문하기</Button>
                </div>
            </div>
        

        return (
             orderSummary 
        )

    }


}

export default OrderSummary