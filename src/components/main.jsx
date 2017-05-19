import React, { Component } from 'react';
import Moment from 'react-moment';

class Main extends Component {
  render (){
    return (
      <div>
        <ul>Created on: <Moment format="YYYY-MM-DD">{this.props.created_at}</Moment>
        <br></br> Message: {this.props.text}</ul>
      </div>
    );
  }
}

export default Main
