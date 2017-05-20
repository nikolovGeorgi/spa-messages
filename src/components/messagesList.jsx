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
    const temp = this.props.location.pathname.split('/messages/')[1];
    if( temp === undefined) {
      this.getInitialData();
    } else {
      this.getSingleMessage(temp);
    }
  }

  getInitialData = async () => {
    const data = await api.getMessages();
    this.setState({messages: data.results});
  }

  getSingleMessage = async () => {
    console.log(this.props.match.params.id);
    let result = await api.getMessageById(this.props.location.pathname.split('/messages/')[1]);
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
    console.log(this.props.location.pathname.split('/messages/')[1]);
    console.log(this.props);
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

const Message = ({ match }) => {
  return <h1>Hello {match.params.id}</h1>
}
export default MessagesList
