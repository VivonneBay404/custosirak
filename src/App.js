import React, { Component,Suspense } from 'react';
import DosirakBuilder from '../src/containers/DosirakBuilder/DosirakBuilder'
import './App.css';
import Layout from './layout/Layout';
import { Route, Switch } from 'react-router-dom';
//lazy loading으로 바꿈(지정된url로 가야 다운로드됨)
// import Order from '../src/containers/Orders/Orders';
// import Login from '../src/containers/Auth/Login/Login'
import Spinner from '../src/UI/Spinner/Spinner'

const Order = React.lazy(() => import('../src/containers/Orders/Orders'));
const Login = React.lazy(() => import('../src/containers/Auth/Login/Login'))
const SignUp = React.lazy(() => import('../src/containers/Auth/SignUp/SignUp'))


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/dosirakbuilder' component={DosirakBuilder} />
          <Route path='/orders' render={() =><Suspense fallback={<Spinner/>}><Order/></Suspense>} />
          <Route path='/login' render={() =><Suspense fallback={<Spinner/>}><Login/></Suspense>} />
          <Route path='/signup' render={() =><Suspense fallback={<Spinner/>}><SignUp/></Suspense>} />
          {/* 만약 없는 url을 치면 redirect to dosirakbuilder */}
          <Route path='/' component={DosirakBuilder} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
