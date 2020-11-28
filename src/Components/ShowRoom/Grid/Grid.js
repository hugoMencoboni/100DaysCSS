import React, { Component } from 'react';
import  './Grid.scoped.scss';
import  './Pixel/Pixel';
import Pixel from './Pixel/Pixel';

const gridLenght = 20*20;

class Grid extends Component {
    state = {
      gridState: Array(gridLenght).fill(0)
    }
        
    pixelClicked = (state, index) => {
      const gridState = this.state.gridState;
      gridState[index] = state;

      this.setState({ gridState: gridState });
    }
  
    render() {
      const pixels = this.state.gridState
        .map((s, index) => (<Pixel key={index} checked={s} click={this.pixelClicked.bind(this, !s, index)}></Pixel>));

      return (
        <div className="challenge">
            {pixels}
        </div>
      );
    }
  }

export default Grid;

