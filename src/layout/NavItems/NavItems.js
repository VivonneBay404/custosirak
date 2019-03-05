import React from 'react';
import NavItem from '../NavItems/NavItem/NavItem'
import classes from './NavItems.css'
const navItems = (props) => (
    <div className={classes.NavItems}>
        <NavItem link ='/dosirakbuilder'>내 도시락 만들기</NavItem>
        <NavItem link ='/orders'>내 주문</NavItem>
        <NavItem link ='/login'>로그인</NavItem>
    </div>
)

export default navItems