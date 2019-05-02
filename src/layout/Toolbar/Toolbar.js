import React from 'react';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import classes from './Toolbar.css'
import Logo from '../../UI/Logo/Logo'

const toolbar = (props) => (

    <div className={classes.Toolbar}>
        <DrawerToggle clicked={props.sideDrawerToggle} />
        <Logo/>
        <nav className={classes.DeskTopOnly}>
            <NavItems/>
        </nav>

    </div>

)

export default toolbar;