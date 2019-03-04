import React from 'react';
import NavItem from '../NavItems/NavItem/NavItem'
import classes from './NavItems.css'
const navItems = (props) => (
    <div className={classes.NavItems}>
        <NavItem>내 도시락 만들기</NavItem>
        <NavItem>내 주문</NavItem>
        <NavItem>로그인</NavItem>
    </div>
)

export default navItems