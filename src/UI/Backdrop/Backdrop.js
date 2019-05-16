import React from 'react';
import classes from '../Backdrop/Backdrop.css'

const Backdrop = (props) => {
    let beSeen = props.show
    if( props.wasBuilding ){
        beSeen = true
    }
    return (
        <div className={classes.Backdrop}
            style={{ display: beSeen ? 'block' : 'none' }}
            onClick={props.canceled}>{props.children}</div>
    )
}


export default Backdrop