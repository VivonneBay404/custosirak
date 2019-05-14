import React from 'react'
import classes from './Input.css'
const input = (props) => {

    let placeholder = ''
    switch (props.label) {
        case 'ID':
            placeholder = '영어, 5자리~10자리'
            break;
        case 'password':
            placeholder = ' 5자리~15자리'
            break;
        case '이름':
            placeholder = '2글자~10글자'
            break;
        case 'email':
            placeholder = 'example@example.com'
            break;
        case '집주소':
            placeholder = '배달될 주소'
            break;
        default:
            break;
    }

    let inputTag = ''
    switch (props.inputType) {
        case 'input':
            inputTag = <input className={classes.Input} placeholder={placeholder} onChange={props.changed} type={props.type}/>
            break;
        case 'textarea':
            inputTag = <textarea className={classes.Input} onChange={props.changed} type={props.type}/>
            break;

        default:
            break;
    }

    let invalidInfo = null
    if (props.valid && props.touched) {
        invalidInfo = <div className={classes.Invalid}>적합하지않은 입력입니다</div>
    }
    return (
        <>
            <div>{props.label}</div>
            {invalidInfo}
            {inputTag}
        </>

    )

}

export default input