import React, { Component } from 'react';
import  './Counter.scoped.scss';

class Counter extends Component {
    state = {
      count: 0,
      increaseCount: null,
      decreaseCount: null
    }
        
    increaseCountBy = (offset) => {
      this.setState({ 
        count: this.state.count + offset, 
        increaseCount: offset > 0 ? this.state.increaseCount + 1 : 0, 
        decreaseCount: offset < 0 ? this.state.decreaseCount + 1 : 0
      });
    }
  
    render() {
      let countElm;
      if(this.state.increaseCount === null || this.state.decreaseCount === null) {
        countElm = (
          <div className="count">
            <div></div>
            <div>{this.state.count}</div>
          </div>);
      } else if(this.state.increaseCount > 0) {
        let containerClass = this.state.increaseCount % 2 ? "count increasing-1" : "count increasing-2";
        countElm = (
          <div className={containerClass}>
            <div>{this.state.count}</div>
            <div>{this.state.count - 1}</div>
          </div>
        );
      } else if(this.state.decreaseCount > 0) {
        let containerClass = this.state.decreaseCount % 2 ? "count decreasing-1" : "count decreasing-2";
        countElm = (
          <div className={containerClass}>
            <div>{this.state.count}</div>
            <div>{this.state.count + 1}</div>
          </div>
        );
      }

      return (
        <div className="challenge">
            <div className="container">
              <div className="decrease" onClick={this.increaseCountBy.bind(this, -1)}>
                <div></div>
              </div>
              { countElm }
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
