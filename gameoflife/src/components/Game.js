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
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
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
					seed={this.seed}
					gridSize={this.gridSize}
				/>
     
       <Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}


export default Game
