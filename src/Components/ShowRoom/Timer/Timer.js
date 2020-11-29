import React, { Component } from 'react';
import  './Timer.scoped.scss';

class Timer extends Component {
    state = {
      time: 0,
      pause: false
    }
        
    tick = () => {
      if(!this.state.pause) {
        this.setState({ time: this.state.time + 1 })
      }
    };

    pause = () => this.setState({ pause: !this.state.pause })

    componentDidMount() {  
      setInterval(this.tick, 1000);
    }

    render() {
      const timeReverse = this.state.time.toString().split('').reverse();
      const lenght = this.props.lenght || 4;
      let chars = [];

      for(let i = 0; i < lenght; i++) {
        chars.unshift((<div className='char' key={i}>{ timeReverse[i] || 0 }</div>));
      }

      let actions;
      if(this.state.pause) {
        actions = (
          <div className="visual">
            <div className="un-pause"></div>
          </div>);
      } else {
        actions = (
          <div className="visual">
            <div className="pause"></div>
            <div className="pause"></div>
          </div>);
      }

      return (
        <div className="challenge">
          <div className="displayer">
            {chars}
          </div>
          <div className="actions">
            {actions}
            <button onClick={this.pause.bind(this)}></button>
          </div>
        </div>
      );
    }
  }

export default Timer;

