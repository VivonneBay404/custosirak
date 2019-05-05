import React from 'react'
import classes from './Order.css'
import Button from '../../../UI/Button/Button'

const order = (props) => {

    let deleteInfo = ''

    if(props.deleting){
        deleteInfo = '삭제중...'
    } else {
        deleteInfo = '삭제'
    }

    return (
        <div className={classes.Order}>
            <div className={classes.OrderID}>주문번호:{props.orderID}</div>
            <div>선택한 아이템:{props.items}</div>
            <div>총 가격: {props.price}원</div>
            <Button btnType='Cancel' clicked={props.canceled}>{deleteInfo}</Button>
        </div>
    )
}

export default order