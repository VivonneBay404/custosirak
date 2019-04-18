import React from 'react';
import classes from './DosirakView.css';
import DosirakViewItem from './DosirakViewItem/DosirakViewItem'
const dosirak = (props) => {
    //if selected true in items

    const items = props.selectedItems

    return (
        <div className={classes.Dosirak}>
        {/* background 어둡게하는 css holder*/}
        <div className={classes.Banchan1}></div>
        <div className={classes.Banchan2}></div>
        <div className={classes.Banchan3}></div>
        <div className={classes.Rice}></div>
        <div className={classes.Soup}></div>
            {/* 배열로 만들어서 맵으로 DosirakItem loop */}
            {
                items.map(e => {
                    return(
                    <DosirakViewItem section={e.section}>{e.name}</DosirakViewItem>
                    )
                })
            }
        </div>
    )
}

export default dosirak 