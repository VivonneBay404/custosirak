import React,{Component} from 'react';
import classes from './Login.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import {NavLink} from 'react-router-dom'

class Login extends Component{
    render(){
        return (
            <div className={classes.Login}>
            <div>Log in</div>
            <Input inputType='input' placeholder='ID'/>
            <Input inputType='input' placeholder='PASSWORD'/>
                <Button>로그인</Button>
                <NavLink className={classes.Button} to='/signup'>회원가입</NavLink>
            </div>
        )
    }
}

export default Login