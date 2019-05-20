import React from 'react'
import classes from './WebAppInfo.css'

const webAppInfo = (props) => {
    return (
        <div className={classes.WebAppInfo}>
            <h1>{props.title}</h1>
            <div>{props.children}</div>
        </div>

    )
}

export default webAppInfo