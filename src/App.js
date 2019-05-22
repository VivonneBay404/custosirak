import React, { Component, Suspense } from 'react';
import DosirakBuilder from '../src/containers/DosirakBuilder/DosirakBuilder'
import './App.css';
import Layout from './layout/Layout';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
//lazy loading으로 바꿈(지정된url로 가야 다운로드됨)
// import Order from '../src/containers/Orders/Orders';
// import Login from '../src/containers/Auth/Login/Login'
import Spinner from '../src/UI/Spinner/Spinner'
import Logout from '../src/containers/Auth/Logout/Logout'
import * as actions from './store/actions/index'



const Order = React.lazy(() => import('../src/containers/Orders/Orders'));
const Login = React.lazy(() => import('../src/containers/Auth/Login/Login'))
const SignUp = React.lazy(() => import('../src/containers/Auth/SignUp/SignUp'))
const WebAppInfos = React.lazy(() => import('../src/components/WebAppInfos/WebAppInfos'))
const Contact = React.lazy(() => import('../src/components/Contact/Contact'))


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    //로그인 안된상태의 라우트
    let routes = (
      <Switch>
        <Route path='/dosirakbuilder' component={DosirakBuilder} />
        <Route path='/login' render={() => <Suspense fallback={<Spinner />}><Login /></Suspense>} />
        <Route path='/signup' render={() => <Suspense fallback={<Spinner />}><SignUp /></Suspense>} />
        <Route path='/aboutThisWebApp' render={() => <Suspense fallback={<Spinner />}><WebAppInfos /></Suspense>} />
        <Route path='/contact' render={() => <Suspense fallback={<Spinner />}><Contact /></Suspense>} />
        <Route path='/' component={DosirakBuilder} />
      </Switch>

    )
    //로그인 된상태의 라우트
    if (this.props.isAuthenticated) {
      routes =
        <Switch>
          <Route path='/dosirakbuilder' component={DosirakBuilder} />
          <Route path='/orders' render={() => <Suspense fallback={<Spinner />}><Order /></Suspense>} />
          <Route path='/logout' component={Logout} />
          {/* 만약 없는 url을 치면 redirect to dosirakbuilder */}
          <Route path='/aboutThisWebApp' render={() => <Suspense fallback={<Spinner />}><WebAppInfos /></Suspense>} />
          <Route path='/contact' render={() => <Suspense fallback={<Spinner />}><Contact /></Suspense>} />
          <Route path='/' component={DosirakBuilder} />
        </Switch>
    }

    return (
      <Layout>
        {routes}
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
