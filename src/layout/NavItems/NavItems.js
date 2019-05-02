import React from 'react';
import NavItem from '../NavItems/NavItem/NavItem'
import classes from './NavItems.css'
const navItems = (props) => {
    const sideDrawerClosed = props.canceled
    
    return (
        <div className={classes.NavItems}>
        <NavItem link ='/dosirakbuilder' closed ={sideDrawerClosed} >내 도시락 만들기</NavItem>
        <NavItem link ='/orders'  closed ={sideDrawerClosed}>내 주문</NavItem>
        <NavItem link ='/login'  closed ={sideDrawerClosed}>로그인</NavItem>
    </div>
    )
  
    }

export default navItems