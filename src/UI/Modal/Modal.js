import React from 'react';
import classes from '../Modal/Modal.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

const Modal = (props) =>
    (
        <>
            <BackDrop show={props.show} canceled={props.canceled}></BackDrop>
            <div className={classes.Modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}</div>
        </>
    )

export default Modal