import React from 'react'
import classes from './Input.css'
const input = (props) => {

    let inputTag = ''
    switch (props.inputType) {
        case 'input':
            inputTag = <input className={classes.Input} placeholder={props.placeholder}/>
            break;
        case 'textarea':
            inputTag = <textarea className={classes.Input}/>
            break;

        default:
            break;
    }
    return (
       inputTag
    )

}

export default input