import React, { Component } from 'react'
import Modal from '../../UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        
        constructor() {
            super();
            //req를 인터셉트하는 property
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                console.log("req interceptor")
                return req;
            })
            //res를 입터셉트하는 property
            //만약 에러가 있으면 state.error를 error로 바꿈
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }
        //interceptor를 clear하는 메소드
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
                <>
                    <Modal show={this.state.error} canceled={this.errorConfirmedHandler}>
                       {this.state.error ? this.state.error.message: null}
                </Modal>
                    <WrappedComponent {...this.props} />
                </>

            )
        }

    }
}

export default withErrorHandler