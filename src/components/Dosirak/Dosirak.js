import React from 'react';
import classes from './Dosirak.css';
import DosirakItem from './DosirakItem/DosirakItem'
const dosirak = (props) =>{
    return (
        <div className={classes.Dosirak}>
            <DosirakItem>제육</DosirakItem>
            <DosirakItem>불고기</DosirakItem>
        </div>
    )
}

export default dosirak 