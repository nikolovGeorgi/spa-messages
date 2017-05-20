import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/home.jsx'
import MessagesList from './components/messagesList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Powered by React</h2>
        </div>
        <Router>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/messages' component={MessagesList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
