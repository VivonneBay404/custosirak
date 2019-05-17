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
                <div className={classes.SelectedItem} key={e}>{e}</div>
            )
        })

        let orderSummary = null

        orderSummary =
            <div className={classes.OrderSummary}>
                <div className={classes.HeadLine}>주문내역</div>
                <div className={classes.SelectedItems}>
                    {selectedItemList}
                </div>
                <div className={classes.Price}><span style={{ 'fontWeight': '500' }}>총 가격:</span> {this.props.totalPrice}원</div>
                <p style={{ 'fontWeight': 'bold' }}>주문하시겠습니까?</p>
                <div className={classes.BtnContainer}>
                    <Button btnType='Cancel' clicked={this.props.canceled}>아니오</Button>
                    <Button btnType='Enter' clicked={this.props.confirmed}><strong>기본 주소</strong>로 주문하기</Button>
                    <Button btnType='Enter' clicked={this.props.changeToDiff}><strong>다른 주소</strong>로 주문하기</Button>
                </div>
            </div>


        return (
            orderSummary
        )

    }


}

export default OrderSummary