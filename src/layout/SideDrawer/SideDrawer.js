import React from 'react';
import classes from './SideDrawer.css';
import NavItems from '../NavItems/NavItems'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let attachedClasses =[classes.SideDrawer, classes.Close]
    if(props.show){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return (
        <>
            <Backdrop show={props.show} canceled={props.canceled} />
            <div className={attachedClasses.join(' ')}>
                <NavItems  canceled={props.canceled} isAuthenticated ={props.isAuth}/>
            </div>
        </>
    )
}

export default sideDrawer