import React from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './Toolbar.css'

const toolbar = (props) => (
    
    <div className={classes.Toolbar}>
        <h1>custosirak</h1>
        <NavItems/>
    </div>
    
)

export default toolbar;