import React, {Component} from 'react';
import Buttons from "./Buttons"
import Grid from "./Grid"


class Game extends Component {
	constructor() {
		super();
		this.speed = 500;
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

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 500;
		this.playButton();
	}

	medium = () => {
		this.speed = 250;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFill: grid,
			generation: 0
		});
	}

gridSize = (size) => {
	switch (size) {
		case "1":
			this.cols = 25;
			this.rows = 25;
		break;
		case "2":
			this.cols = 50;
			this.rows = 30;
		break;
		default:
			this.cols = 70;
			this.rows = 50;
	}
	this.clear();

}

play = () => {
	let g = this.state.gridFill;
	let g2 = arrayClone(this.state.gridFill);

	// If a box is in position [i}[j], the all of it's adjacent boxes are:
	//     [i-1][j], [i][j-1], [i-1][j+1], [i+1][j-1], 
	//     [i+1][j], [i][j+1], [i+1][j+1], [i-1][j-1],

	for (let i = 0; i < this.rows; i++) {
	  for (let j = 0; j < this.cols; j++) {
		let count = 0;
		if (i > 0 && g[i - 1][j]) count++;
		if (j > 0 && g[i][j - 1]) count++;

		if (i > 0 && j < this.cols - 1 && g[i - 1][j + 1]) count++;
		if (j > 0 && i < this.rows - 1 && g[i + 1][j - 1]) count++;

		if (i < this.rows - 1 && g[i + 1][j]) count++;
		if (j < this.cols - 1 && g[i][j + 1]) count++;

		if (i > 0 && j > 0 && g[i - 1][j - 1]) count++;
		if (i < this.rows - 1 && j < this.cols - 1 && g[i + 1][j + 1]) count++;
		
		if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		if (!g[i][j] && count === 3) g2[i][j] = true;
	  }
	}
	this.setState({
	  gridFill: g2,
	  generation: this.state.generation + 1
	
	});

}

componentDidMount() {
	this.populate();
	this.playButton()	
}

render() {
	return (
		<div>
			
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
	);
}
}

function arrayClone(arr) {
return JSON.parse(JSON.stringify(arr));
}

export default Game