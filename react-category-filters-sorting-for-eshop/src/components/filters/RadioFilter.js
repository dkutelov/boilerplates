import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FormGroup, InputGroup, Radio, ControlLabel } from 'react-bootstrap'
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
		} else if (attribute === 'screenSize') {
			this.props.dispatch(actions.selectByScreenSize(value))
		} else if (attribute === 'camera') {
			this.props.dispatch(actions.selectByCamera(value))
		}

		this.setState(() => attrValObj)
	}

	renderRadioInputs(atributeName) {
		let attributeList = _.chain(data)
			.map(attribute => attribute[atributeName])
			.uniq()
			.sortBy()
			.value()
		attributeList.unshift('Show all')

		return attributeList.map(attribute => (
			<InputGroup key={attribute}>
				<Radio
					name={atributeName}
					value={attribute}
					onChange={this.handleInputChange}>
					{attribute}
				</Radio>
			</InputGroup>
		))
	}

	render() {
		return (
			<FormGroup>
				<ControlLabel>{_.capitalize(this.props.attribute)}</ControlLabel>
				{this.renderRadioInputs(this.props.attribute)}
			</FormGroup>
		)
	}
}

export default connect()(RadioFilter)
