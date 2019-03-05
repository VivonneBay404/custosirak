import React from 'react';
import classes from './NavItem.css';
import {NavLink} from 'react-router-dom'

const navItem = (props) => (
    <div className={classes.NavItem}>
      <NavLink to={props.link}>
        {props.children}
      </NavLink>
         
    
    </div>
)

export default navItem