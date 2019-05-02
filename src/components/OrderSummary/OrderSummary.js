import React from 'react';
import Button from '../../UI/Button/Button';
import classes from '../OrderSummary/OrderSummary.css';

const OrderSummary = (props) => {
    const selectedItems = props.selectedItems;
    let selectedItemNames = []
    selectedItems.map(e => {
        return selectedItemNames.push(e.name)
    })

    //선택된 아이템을 여러줄로 표시하기위한 map
    let selectedItemList = [];
    selectedItemList = selectedItemNames.map(e => {
        return (
            <div className={classes.SelectedItems}>{e}</div>
        )
    })
    return (
        <div className={classes.OrderSummary}>
            <div className={classes.HeadLine}>주문내역</div>
            {selectedItemList}
            <div className={classes.Price}>총가격: {props.totalPrice}</div>
            <p>주문하시겠습니까?</p>
            <div className={classes.BtnContainer}>
                <Button btnType='Cancel' clicked={props.canceled}>아니오</Button>
                <Button btnType='Enter' clicked={props.confirmed}>주문하기</Button>
            </div>

        </div>
    )
}

export default OrderSummary