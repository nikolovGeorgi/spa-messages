import React, { Component } from 'react';
import Messages from './messages.jsx';
import PostMessage from './postMessage.jsx';

import api from './api.js';

import uuid from 'uuid';
class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      messages: []
    };
  }

  componentWillMount(){
    const temp = this.props.location.pathname.split('/messages/')[1];
    if( temp === undefined) {
      this.getInitialData();
    } else {
      this.getSingleMessage(temp);
    }
  }

  getInitialData = async () => {
    const data = await api.getMessages();
    const allMessages = [];
    for (let page of data) {
      for (let i = 0; i < page.results.length; i++){
        allMessages.push(page.results[i]);
      }
    }
    this.setState({messages: allMessages});
  }

  getSingleMessage = async () => {
    const result = await api.getMessageById(this.props.location.pathname.split('/messages/')[1]);
    this.setState({messages: result})
  }

  handleDeleteClick = async (id) => {
    const index = this.state.messages.findIndex(e => e.id === id);
    await api.deleteMessage(id);
    const newMessages = this.state.messages.slice();
    newMessages.splice(index, 1);
    this.setState({messages: newMessages});
  }

  handleMessage = async (text) => {
    const dateToFormat = new Date();
    const newMessage = {
      id: uuid.v1(),
      text,
      created_at: dateToFormat
    }
    const temp = await api.postMessage(newMessage);
    const messages = this.state.messages.concat(temp);
    this.setState({messages})
  }

  render() {
    const temp = this.props.location.pathname.split('/messages/')[1];
    if (temp === undefined) {
      const messagesResults = (this.state.messages).map(message =>
        <Messages
          key={message.id}
          id={message.id}
          text={message.text}
          created_at={message.created_at}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
      return (
        <main className="messages">
          <PostMessage handleMessage={this.handleMessage} />
          {messagesResults}
        </main>
      );
    } else {
      const messagesResults = (this.state.messages).map(message =>
        <Messages
          key={message.id}
          id={message.id}
          text={message.text}
          created_at={message.created_at}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
      return (
        <main className="messages">
          <PostMessage handleMessage={this.handleMessage} />
          {messagesResults}
        </main>
      );
    }
  }

}

export default MessagesList
