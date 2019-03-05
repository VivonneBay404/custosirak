import React, { Component } from 'react';
import DosirakBuilder from '../src/containers/DosirakBuilder/DosirakBuilder'
import './App.css';
import Layout from './layout/Layout';
import {Route,Switch} from 'react-router-dom';
import Order from '../src/containers/Orders/Orders';
import Login from '../src/containers/Auth/Login/Login'

class App extends Component {
  render() {
    return (
    <Layout>
    <Switch>
      <Route path='/dosirakbuilder' component={DosirakBuilder}/>
      <Route path='/orders' component={Order}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={DosirakBuilder}/>
    </Switch>
    </Layout>
    )
  }
}

export default App;
