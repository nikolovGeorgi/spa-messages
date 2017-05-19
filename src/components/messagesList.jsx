import React, { Component } from 'react';

import Messages from './messages.jsx';
import api from './api.js';

class MessagesList extends Component {

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

  // TODO <btn onClick={this.deleteHandler(i)}
  // handleDelete = (id) => {
  //   // find the message in the array
  //   let index = this.state.messages.findIndex(e => e.id === id);
  //   // copy it over
  //   let newMessages = this.state.messages.slice();
  //   //delete the element
  //   newMessages.splice(index, 1);
  //   this.setState({messages: newMessages});
  // }

  async handleDeleteClick (tab) {
    this.setState({tab})
  }
  render() {
    return (
      <main className="messages">
        {(this.state.messages).map(function(message) {
          return (
            <Messages
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


export default MessagesList
