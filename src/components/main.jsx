import React, { Component } from 'react';
import Moment from 'react-moment';

class Main extends Component {
  render (){
    return (
      <ul>
        {this.props.id}
        {this.props.text}
        <Moment format="YYYY-MM-DD">{this.props.created_at}</Moment>
      </ul>
    );
  }
}

export default Main
