import React, { Component } from 'react';

import Main from './main.jsx';
import api from './api.js';

class Messages extends Component {

  constructor(props) {
    super(props);
    this.state= {
      messages: []
    };
  }
  componentWillMount(){
    api.getMessages().then((res) => {
      this.setState({
        messages: res.results
      })
    })
  }

  render() {
    console.log('api: ', this.state.messages);
    return (
      <main className="messages">
        {(this.state.messages).map(function(message) {
          return(
            <Main
              key={message.id}
              text={message.text}
              created_at={message.created_at}
            />
          );
        })}
      </main>
    );
  }

}


export default Messages
