import React, {Component} from 'react';
import Box from "./Box"

class Grid extends Component {
	render() {
		const width = (this.props.cols * 16);  // Number of columns * the width of the column in pixels
		let rowsArr = [];

		let boxClass = "";
		for (let x = 0; x < this.props.rows; x++) {
			for (let y = 0; y < this.props.cols; y++) {
				let boxId = x + "_" + y;

				boxClass = this.props.gridFill[x][y] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						boxId={boxId}
						row={x}
						col={y}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}
		return (
			<div className="grid" style={{width: width}}>  
				{rowsArr}
			</div>
			//NOTE: 2 curly braces are needed inside this tag; allows the grid size to be changed
		);
	}
}


export default Grid