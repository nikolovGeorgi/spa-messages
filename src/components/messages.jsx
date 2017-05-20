import React, { Component } from 'react';
import Moment from 'react-moment';

class Messages extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    console.log('from messages the id is: ', this.props.id);
    this.props.handleDeleteClick(this.props.id);
  }

  render (){
    return (
      <div>
        <ul>
          Created on: <Moment format="YYYY-MM-DD">{this.props.created_at}</Moment>
          <br></br>
          Message: {this.props.text}
          <button onClick={this.handleClick}>
            Delete Me!
          </button>
        </ul>
      </div>
    );
  }
}

export default Messages
