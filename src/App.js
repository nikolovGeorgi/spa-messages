import React, { Component } from 'react';
import { HashRouter, Route, Link, IndexRoute, hashHistory} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/home.jsx'
import Messages from './components/messages.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Powered by React</h2>
        </div>
        <HashRouter path='/'>
          <div>
            <Route path='/home' component={Home}/>
            <Route path='/messages' component={Messages}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
