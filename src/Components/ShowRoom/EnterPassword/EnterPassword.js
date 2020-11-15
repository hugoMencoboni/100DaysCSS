import React, { Component } from 'react';
import  './EnterPassword.scoped.scss';

class EnterPassword extends Component {
    state = {
      info: "lalala",
      showSecret: false,
    }
        
    inputChange = (event) => {
        if(event?.target?.value === "password") {
            this.showSecret();
        }
    }

    showSecret = () => {
        this.setState({ showSecret: !this.state.showSecret });
    }
  
    render() {
        let a = <div className="secret box">MD5-SU3-CX8</div>;
        let classSecret = this.state.showSecret ? "rotatedBox show" : "rotatedBox";

      return (
        <div className="challenge">
            <div className="container">
                <div className={classSecret}>
                    <input type="text" className="box" placeholder='Enter "password"' onChange={this.inputChange}/>
                    <div className="secret-text">secret</div>
                </div>
                <button onClick={this.showSecret}>test annimation</button>
            </div>
        </div>
      );
    }
  }

export default EnterPassword;
