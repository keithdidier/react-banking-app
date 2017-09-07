import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Login from './components/Login/login';
import Private from './components/Private/private';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component ={Login} />
        <Route path='/private' component ={Private} />
      </div>
    );
  }
}

export default App;
