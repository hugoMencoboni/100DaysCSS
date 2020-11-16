import React, { Component } from 'react';
import  './Send.scoped.scss';

class Send extends Component {
    state = {
      sent: false,
    }
        
    send = () => {
      this.setState({ sent: !this.state.sent });
    }
  
    render() {
      let classSecret = this.state.sent ? "container show" : "container";

      return (
        <div className="challenge">
            <div  className={classSecret}>      
              <div className="send" onClick={this.send}>Send</div>
              <div className="done" onClick={this.send}>Done</div>
            </div>
        </div>
      );
    }
  }

export default Send;
