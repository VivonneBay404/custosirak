import React, { Component } from 'react';
import DosirakBuilder from '../src/components/DosirakBuilder/DosirakBuilder'
import './App.css';
import Layout from './layout/Layout';
import {Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Layout>
    <Switch>
      <Route path='/dosirakbuilder' component={DosirakBuilder}/>
      <Route path='/mydosirak' component={DosirakBuilder}/>
      <Route path='/login' component={DosirakBuilder}/>
    </Switch>
    </Layout>
    )
  }
}

export default App;
