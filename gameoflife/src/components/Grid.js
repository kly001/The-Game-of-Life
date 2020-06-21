import React, {Component} from 'react';
import Box from "./Box"

class Grid extends Component {
	render() {
		const width = (this.props.cols * 16);
		let rowsArr = [];

		let boxClass = "";
		for (let x = 0; x < this.props.rows; x++) {
			for (let y = 0; y < this.props.cols; y++) {
				let boxId = x + "_" + y;

				boxClass = this.props.gridFull[x][y] ? "box on" : "box off";
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
		);
	}
}


export default Grid