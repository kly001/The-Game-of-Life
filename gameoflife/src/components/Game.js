import React, { Component } from 'react'
import Grid from "./Grid"
import Buttons from "./Buttons"

class Game extends Component {
  constructor() {
		super();
		this.speed = 250;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFill: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
		let gridCopy = gridFillClone(this.state.gridFill);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFill: gridCopy
		});
	}

// Button control logic

playButton = () => {

}

pauseButton = () => {
	
}

slow = () => {
	
}

medium = () => {
	
}

fast= () => {
	
}

clear = () => {
	
}

populate= () => {
	
}

gridSize = () => {
	
}


  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					medium={this.medium}
					fast={this.fast}
					clear={this.clear}
					populate={this.populate}
					gridSize={this.gridSize}
				/>

		<h2>Generations: {this.state.generation}</h2>
     
       <Grid
					gridFill={this.state.gridFill}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>		
      </div>
    )
  }
}

// Helper Function:

function gridFillClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}
export default Game
