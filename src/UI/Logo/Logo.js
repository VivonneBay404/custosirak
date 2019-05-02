import React from 'react';
import classes from './Logo.css';
import { NavLink } from 'react-router-dom'

const logo = (props) =>(
    <NavLink className={classes.Logo} to={'/dosirakbuilder'}>custosirak</NavLink>
)

export default logo