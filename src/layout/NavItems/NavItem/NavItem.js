import React from 'react';
import classes from './NavItem.css';
import { NavLink } from 'react-router-dom'

const navItem = (props) => (
  <div className={classes.NavItem} onClick={props.closed}>
    <NavLink to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </div>
)

export default navItem