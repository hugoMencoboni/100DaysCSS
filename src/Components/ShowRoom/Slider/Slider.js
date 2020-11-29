import React, { Component } from 'react';
import  './Slider.scoped.scss';

class Slider extends Component {
    state = {
      range: 50
    }
        
    rangeChange = (e) => {
        const newRange = +e.target.value;
        this.setState({ range: newRange })
    };

    render() {
      return (
        <div className="challenge">
            <input className="slider" type="range" min={this.props.min || 0} max={this.props.max || 100} value={this.state.range} onChange={this.rangeChange} />
        </div>
      );
    }
}

export default Slider;
