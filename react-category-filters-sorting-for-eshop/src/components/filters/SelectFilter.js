import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import _ from 'lodash'

import data from '../../data/data'
import * as actions from '../../actions'

class RadioFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.state[this.props.attribute] = undefined
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e) {
		const attrValObj = {}
		const attribute = e.target.name
		let value = e.target.value
		if (value === 'Show all') {
			value = undefined
		}
		attrValObj[attribute] = value
		if (attribute === 'brand') {
			this.props.dispatch(actions.selectByBrand(value))
		}

		this.setState(() => attrValObj)
	}

	// Renders the options for the brand names
	renderOptions(atributeName) {
		let attributeList = _.chain(data)
			.map(attribute => attribute[atributeName])
			.uniq()
			.sortBy()
			.value()
		attributeList.unshift('Show all')
		return attributeList.map(attribute => (
			<option key={attribute} value={attribute}>
				{attribute}
			</option>
		))
	}

	render() {
		return (
			<FormGroup>
				<ControlLabel>Select brand</ControlLabel>
				<FormControl
					className="select-brand-filter"
					componentClass="select"
					name="brand"
					value={this.state.brand}
					onChange={this.handleInputChange}>
					{this.renderOptions('brand')}
				</FormControl>
			</FormGroup>
		)
	}
}

export default connect()(RadioFilter)
