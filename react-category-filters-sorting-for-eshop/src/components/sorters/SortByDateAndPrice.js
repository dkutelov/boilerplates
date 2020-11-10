import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { sortBy } from '../../actions'

class SortByDateAndPrice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sortBy: undefined
		}
		this.handleSortBy = this.handleSortBy.bind(this)
	}
	handleSortBy(what) {
		this.props.dispatch(sortBy(what))
		this.setState(() => ({ sortBy }))
	}

	render() {
		return (
			<div>
				<Button
					bsStyle="success"
					bsSize="small"
					onClick={() => this.handleSortBy('price')}>
					Sort By Price
				</Button>
				<Button
					bsStyle="warning"
					bsSize="small"
					onClick={() => this.handleSortBy('date')}>
					Sort By Date
				</Button>
			</div>
		)
	}
}

export default connect()(SortByDateAndPrice)
