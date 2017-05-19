import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom';
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
        <HashRouter path='/'>
          <div>
            <Route path='/home' component={Home}/>
            <Route path='/messages' component={MessagesList}>
              <Route path='/messages/:id' component={MessagesList}/>
            </Route>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
