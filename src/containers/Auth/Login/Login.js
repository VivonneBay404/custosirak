import React, { Component } from 'react';
import classes from './Login.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'
import errorMessageUpdater from '../errorMessages/errorMessageUpdater'
import { Redirect } from 'react-router-dom'
import LoadingBackdrop from '../../../UI/Backdrop/LoadingBackdrop/LoadingBackdrop';


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    loginHandler = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state.email, this.state.password)
    }

    inputChangedhandler = (event, inputIdentifier) => {
        const updatedInput = event.target.value
        if (inputIdentifier === 'email') {
            this.setState({ email: updatedInput })
        } else {
            this.setState({ password: updatedInput })
        }

    }

    componentDidMount(){
        this.props.onCleanupError()
    }
    render() {

        let errorMessage = null
        if (this.props.error) {
            errorMessage = errorMessageUpdater(this.props.error.message)
        }

        let authRedirect = null
        if (this.props.isAuthenticated && this.props.isUserInfoLoaded) {
            authRedirect = <Redirect to='/' />
        }
        let disability = false
        if (this.state.email === '' || this.state.password === '') {
            disability = true
        }
        return (
            <>
                {authRedirect}
                <LoadingBackdrop loading={this.props.loading} />
                <div className={classes.Login}>
                    {errorMessage}
                    <div className={classes.LoginTitle}>Log in</div>
                    <form onSubmit={this.loginHandler} className={classes.Form}>
                        <Input inputType='input' placeholder='eamil' type='email' changed={event => this.inputChangedhandler(event, 'email')} />
                        <Input inputType='input' placeholder='password' type='password' changed={event => this.inputChangedhandler(event, 'password')} />
                        <Button disabled={disability}>로그인</Button>
                        <NavLink className={classes.Button} to='/signup'>회원가입</NavLink>
                    </form>

                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        isUserInfoLoaded: state.auth.userName !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.auth(email, password, 'login')),
        onCleanupError: () => dispatch(actions.authCleanupError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)