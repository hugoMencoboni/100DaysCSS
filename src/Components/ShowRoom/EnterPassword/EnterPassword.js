import React, { Component } from 'react';
import  './EnterPassword.scoped.scss';

class EnterPassword extends Component {
    state = {
      showSecret: false,
    }
        
    inputChange = (event) => {
        if(event?.target?.value === "password") {
            this.setState({ showSecret: !this.state.showSecret });
        }
    }
  
    render() {
      let classSecret = this.state.showSecret ? "rotatedBox show" : "rotatedBox";

      return (
        <div className="challenge">
            <div className="container">      
                <div className="rotatedBox">
                    <div className="secret box">MD5-SU3-CX8</div>
                </div>
                <div className={classSecret}>
                    <div className="secret-text box">Secret Key</div>
                    <input type="text" className="box" placeholder='Enter "password"' onChange={this.inputChange}/>
                </div>
            </div>
        </div>
      );
    }
  }

export default EnterPassword;
