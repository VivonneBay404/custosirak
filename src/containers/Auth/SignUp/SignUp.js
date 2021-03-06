import React, { Component } from 'react'
import classes from './SignUp.css'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'
import errorMessageUpdater from '../errorMessages/errorMessageUpdater'
import { Redirect } from 'react-router-dom'
import LoadingBackdrop from '../../../UI/Backdrop/LoadingBackdrop/LoadingBackdrop'

class SignUp extends Component {

    state = {
        signUpForm: {
            email: {
                inputType: 'input',
                value: '',
                type: 'email',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                inputType: 'input',
                value: '',
                type: 'password',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 15
                },
                valid: false,
                touched: false
            },
            이름: {
                inputType: 'input',
                value: '',
                type: 'text',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 20
                },
                valid: false,
                touched: false
            },

            집주소: {
                inputType: 'input',
                value: '',
                type: 'text',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 50
                },
                valid: false,
                touched: false
            }
        },
        loading: false,
        isAllValid: false
    }
    componentDidMount() {
        this.props.onCleanupError()
    }

    signUpHandler = () => {
        // event.preventDefault();
        let formData = {}
        const updatedSignUpForm = { ...this.state.signUpForm }
        for (const formIdentifier in updatedSignUpForm) {
            //forData에 formIdentifier를 키로 inputData를 value로 하는 오브젝트넣기
            formData[formIdentifier] = updatedSignUpForm[formIdentifier].value
        }
        // axiosUsers.post('.json', formData)
        this.props.onSignUp(this.state.signUpForm.email.value, this.state.signUpForm.password.value, formData)
    }

    inputChangedHandler = (event, formIdentifier) => {

        //signupForm 카피
        const updatedSignUpForm = { ...this.state.signUpForm }
        //위의 코드는 nested object까지는 카피를 하지않기때문에 한번더 카피 (inputType,value...)
        const updatedSignUpElement = { ...updatedSignUpForm[formIdentifier] }
        //value키 에 input value 넣기
        updatedSignUpElement.value = event.target.value
        //checkValid를 이용해 valid value넣기
        updatedSignUpElement.valid = this.checkValid(updatedSignUpElement.value, updatedSignUpElement.validation)
        //입력을하면 touched = true
        updatedSignUpElement.touched = true
        //updated된 element를 다시 updatedSignUpForm에 넣기
        updatedSignUpForm[formIdentifier] = updatedSignUpElement
        console.log(updatedSignUpElement.valid)
        let everyValid = true
        for (const formIdentifier in updatedSignUpForm) {
            everyValid = updatedSignUpForm[formIdentifier].valid && everyValid
        }

        this.setState({ signUpForm: updatedSignUpForm, isAllValid: everyValid })
    }

    checkValid = (value, rules) => {
        let isValid = true

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid
    }
    goBackButtonHandler = () => {
        window.history.back()
    }

    render() {
        //signupform 카피
        const updatedSignUpForm = { ...this.state.signUpForm }
        let formArr = []
        //formArr에 키벨류 페어로 넣기
        for (const key in updatedSignUpForm) {
            formArr.push({
                key: key,
                inputType: updatedSignUpForm[key].inputType,
                value: updatedSignUpForm[key].value,
                valid: updatedSignUpForm[key].valid,
                touched: updatedSignUpForm[key].touched,
                type: updatedSignUpForm[key].type
            })
        }
        //formArr를 loop
        formArr = formArr.map(e =>
            <Input key={e.key}
                label={e.key}
                inputType={e.inputType}
                changed={(event) => this.inputChangedHandler(event, e.key)}
                valid={!e.valid}
                touched={e.touched}
                type={e.type}
            />
        )
        //회원가입이 실패하면 에러메시지를 보여줌
        let errorMessage = null
        if (this.props.error) {
            errorMessage = errorMessageUpdater(this.props.error.message)
        }
        //로딩중이면 백드랍을 보여줌

        let authRedirect = null
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/' />
        }

        return (
            <>
                {authRedirect}
                <LoadingBackdrop loading={this.props.loading} />
                <div className={classes.SignUp}>
                    <div className={classes.BackButton}>
                        <Button btnType='Cancel' clicked={this.goBackButtonHandler}>뒤로가기</Button>
                    </div>
                    <div className={classes.ErrorMessage}>
                        {errorMessage}
                    </div>
                    <form onSubmit={this.signUpHandler} className={classes.Form}>
                        {formArr}
                    </form>
                    
                        <Button btnType='Enter' disabled={!this.state.isAllValid} clicked={() => this.signUpHandler()}>회원가입</Button>
                  



                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (email, password, formData) => dispatch(actions.auth(email, password, 'signup', formData)),
        onCleanupError: () => dispatch(actions.authCleanupError())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)