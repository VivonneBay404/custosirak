import React from 'react';
import classes from './BuildControl.css'

const BuildControl =(props) => {
    console.log(props)
    const btns =props.btnArr.map((e)=>{
        return (
            <button key={e.name}>{e.name} {e.price}</button>
        )
    })
    return (
        <div>
            <h3>{props.section}</h3>
            <div className={classes.Button}>{btns}</div>
        
            
        </div>
    )
}

export default BuildControl