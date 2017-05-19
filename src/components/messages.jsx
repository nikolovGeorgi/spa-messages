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

  // TODO
  handleSubmit = (data) => {
    if (data.status === 'ok') {
      let posts = this.state.posts || [];
      posts.push(data.object);
      this.setState({posts})
    } else {
      console.log(data.message);
    }
  }

  // TODO
  handleDelete = (id) => {
    // find the message in the array
    let index = this.state.messages.findIndex(message => message.id === id)
    // copy it over
    let newMessages = this.state.messages.slice();
    //delete the element
    newMessages.splice(index, 1);
    this.setState({messages: newMessages});
  }

  render() {
    console.log('api: ', this.state.messages);
    return (
      <main className="messages">
        {(this.state.messages).map(function(message) {
          return(
            <Main
              key={message.id}
              id={message.id}
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
