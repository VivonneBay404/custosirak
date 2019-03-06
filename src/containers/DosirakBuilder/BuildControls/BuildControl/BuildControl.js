import React from 'react';
import classes from './BuildControl.css'

const BuildControl =(props) => {
    console.log(props)
    const updatedItems = props.items.map((item)=> {
        return (
            <button key={item.section}>{item}</button>
        )
    })
    const updatedPrice = props.prices.map((price)=> {
        return (
            <div className={classes.Price} >
            {price}
            </div>
        )
    })
    return (
        <div>
            <h3>{props.section}</h3>
            <div className={classes.Button}>{updatedItems}</div>
            <div className={classes.Price}>{updatedPrice}</div>
            
        </div>
    )
}

export default BuildControl