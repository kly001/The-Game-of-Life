import React, {Component} from 'react';
import Buttons from "./Buttons"
import Grid from "./Grid"


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
		let gridCopy = arrayClone(this.state.gridFill);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFill: gridCopy
		});
	}

	populate = () => {
		let gridCopy = arrayClone(this.state.gridFill);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFill: gridCopy
		});
	}

// playButton = () => {

// }

// pauseButton = () => {
	
// }

// slow = () => {
	
// }

// medium = () => {
	
// }

// fast= () => {
	
// }

// clear = () => {
	
// }

// populate= () => {
	
// }

// gridSize = () => {
	
// }



componentDidMount() {
	this.populate();
	
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
			<Grid
				gridFill={this.state.gridFill}
				rows={this.rows}
				cols={this.cols}
				selectBox={this.selectBox}
			/>
			<h2>Generations: {this.state.generation}</h2>
		</div>
	);
}
}

function arrayClone(arr) {
return JSON.parse(JSON.stringify(arr));
}

export default Game