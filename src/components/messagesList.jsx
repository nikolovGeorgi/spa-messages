import React, { Component } from 'react';
import Messages from './messages.jsx';
import PostMessage from './postMessage.jsx';

import api from './api.js';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      messages: []
    };
  }

  componentWillMount(){
    this.getInitialData();
  }

  getInitialData = async () => {
    const data = await api.getMessages();
    this.setState({messages: data.results});
  }

  getSingleMessage = async () => {
    let result = await api.getMessageById(this.props.match.params.id);
    console.log(result);
    this.setState({messages: result})
  }

  handleDeleteClick = (id) => {
    // find the message in the array
    let index = this.state.messages.findIndex(e => e.id === id);
    // copy the array over
    let newMessages = this.state.messages.slice();
    //delete the element
    newMessages.splice(index, 1);
    this.setState({messages: newMessages});
  }

  handleMessage = (text) => {
    let dateToFormat = new Date();
    const newMessage = {
      id: this.state.messages.length+1,
      text,
      created_at: dateToFormat
    }
    const temp = api.postMessage(newMessage);
    const messages = this.state.messages.concat(temp);
    this.setState({messages})
  }

  render() {
    const messagesResults = (this.state.messages).map(message =>
       <Messages
         key={message.id}
         id={message.id}
         text={message.text}
         created_at={message.created_at}
         handleDeleteClick={this.handleDeleteClick}
         />);
    return (
      <main className="messages">
        <PostMessage handleMessage={this.handleMessage} />
        {messagesResults}
        <h1>{this.props.match.params.id}</h1>
      </main>
    );
  }

}

export default MessagesList
