import React, {Component} from 'react';

class PostMessage extends Component {
  handleMessageInput(e){
    if (!(e.key === 'Enter')) {
      return;
    }
    this.props.handleMessage(e.target.value);
    e.target.value = '';
  }

  render(){
    return (
      <div>
        <input className="newMessage"
          placeholder="Type a message and hit ENTER"
          type="text"
          onKeyPress={this.handleMessageInput.bind(this)}
          />
      </div>
    )
  }
}

export default PostMessage;
