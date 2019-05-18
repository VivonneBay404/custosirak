import React from 'react';
import NavItem from '../NavItems/NavItem/NavItem'
import classes from './NavItems.css'
const navItems = (props) => {
    const sideDrawerClosed = props.canceled

    return (
        <div className={classes.NavItems}>
            {props.userName
                ? <div className={classes.UserName}><i>Welcome!</i> <br/> {props.userName}</div>
                : null}
            {/* isAuthenticated가 true 면 log out을 보여주고 아니면 log in을 보여줌 */}
            {props.isAuthenticated
                ? <NavItem link='/logout' closed={sideDrawerClosed}>Log out</NavItem>
                : <NavItem link='/login' closed={sideDrawerClosed}>Log in</NavItem>}

            <NavItem link='/dosirakbuilder' closed={sideDrawerClosed} >내 도시락 만들기</NavItem>
            {/* isAuthenticated가 true 면 내 주문을 보여주고 아니면 안보여줌 */}
            {props.isAuthenticated
                ? <NavItem link='/orders' closed={sideDrawerClosed}>내 주문</NavItem>
                : null}


        </div>
    )

}

export default navItems