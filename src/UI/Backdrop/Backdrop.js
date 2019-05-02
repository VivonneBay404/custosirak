import React from 'react';
import classes from '../Backdrop/Backdrop.css'

const Backdrop = (props) => (

    <div className={classes.Backdrop} 
    style={{display: props.show ?  'block':'none' }}
    onClick={props.canceled}></div>

)
   
 
export default Backdrop