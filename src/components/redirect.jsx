import React from 'react';
import api from './api.js';

export default function Redirect(props) {

  function getSingleMessage() {
    console.log(this.props.match.params.id);
    let result = api.getMessageById(this.props.location.pathname.split('/messages/')[1]);
    console.log(result);
    return result
  }

  return <h1> {getSingleMessage()} </h1>
}
