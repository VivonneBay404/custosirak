import React, { Component } from 'react';
import classes from './Login.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    loginHandler = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state.email,this.state.password)
    }

    inputChangedhandler =(event,inputIdentifier) => {
        const updatedInput = event.target.value
        if(inputIdentifier === 'email'){
            this.setState({email: updatedInput})
        }else {
            this.setState({password:updatedInput})
        }
       
    }

    render() {
        return (
            <div className={classes.Login}>
                <div>Log in</div>
                <form onSubmit={this.loginHandler}>
                    <Input inputType='input' placeholder='eamil' type='email' changed={event => this.inputChangedhandler(event,'email')}/>
                    <Input inputType='input' placeholder='password' type='password' changed={event => this.inputChangedhandler(event,'password')}/>
                    <Button>로그인</Button>
                    <NavLink className={classes.Button} to='/signup'>회원가입</NavLink>
                </form>

                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email,password) => dispatch(actions.auth(email,password,'login'))
    }
}

export default connect(null,mapDispatchToProps)(Login)