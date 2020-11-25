import React, { Component } from 'react';
import  './Counter.scoped.scss';

class Counter extends Component {
    state = {
      count: 0,
    }
        
    increaseCountBy = (offset) => {
      this.setState({ count: this.state.count + offset });
    }
  
    render() {
      return (
        <div className="challenge">
            <div className="container">
              <div className="decrease" onClick={this.increaseCountBy.bind(this, -1)}>
                <div></div>
              </div>
              <div className="current">{ this.state.count }</div>
              <div className="increase" onClick={this.increaseCountBy.bind(this, +1)}>
                <div></div>
                <div></div>  
              </div> 
            </div>
        </div>
      );
    }
  }

export default Counter;
