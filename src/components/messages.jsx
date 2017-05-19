import React, { Component } from 'react';
import Moment from 'react-moment';

class Messages extends Component {

  handleClick = (e) => {
    console.log(this.props.id);
    e.stopPropagation();
    // this.props.handleDeletmessagee(this.props.id);
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
