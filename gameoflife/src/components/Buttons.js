import React, {Component} from 'react';
import { ButtonToolbar, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

class Buttons extends Component {

	handleSelect = (event) => {
		this.props.gridSize(event);
	}

	render() {
		return (
			<div className="center">
				<ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mb-2">
					<button className="btn btn-success" onClick={this.props.playButton}>
						START
					</button>
					<button className="btn btn-danger" onClick={this.props.pauseButton}>
					  STOP
					</button>
					<button className="btn btn-inverse" onClick={this.props.clear}>
					  Clear
					</button>
					<button className="btn btn-info" onClick={this.props.slow}>
					  Slow
					</button>
					<button className="btn btn-info" onClick={this.props.medium}>
					  Medium
					</button>
					<button className="btn btn-info" onClick={this.props.fast}>
					  Fast
					</button>
					<button className="btn btn-warning" onClick={this.props.populate}>
					  Populate
					</button>
					<DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">25x25</Dropdown.Item>
						<Dropdown.Item eventKey="2">50x30-Default</Dropdown.Item>
						<Dropdown.Item eventKey="3">70x50</Dropdown.Item>
					</DropdownButton>
          </ButtonGroup>
				</ButtonToolbar>
			</div>
			)
	}
}

export default Buttons