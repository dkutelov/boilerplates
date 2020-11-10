import React from 'react'
import InputRange from 'react-input-range'
import { connect } from 'react-redux'
import _ from 'lodash'

import 'react-input-range/lib/css/index.css'

import { ControlLabel } from 'react-bootstrap'
import { selectByPrice } from '../../actions'
import data from '../../data/data'

class PriceFilter extends React.Component {
	constructor(props) {
		super(props)
		const numberOfSteps = 20
		this.pricesArr = _.map(data, product => product.price)
		this.minPrice = _.min(this.pricesArr)
		this.maxPrice = _.max(this.pricesArr)
		this.step = _.round((this.maxPrice - this.minPrice) / numberOfSteps, 0)
		this.state = {
			priceRange: {
				min: this.minPrice,
				max: this.maxPrice
			}
		}
	}

	handleChange(priceRange) {
		this.props.dispatch(selectByPrice(priceRange))
		this.setState({ priceRange })
	}

	render() {
		return (
			<div>
				<ControlLabel>Select price range</ControlLabel>
				<br />
				<InputRange
					maxValue={this.maxPrice}
					minValue={this.minPrice}
					step={this.step}
					value={this.state.priceRange}
					onChange={priceRange => this.handleChange(priceRange)}
				/>
				<br />
			</div>
		)
	}
}

export default connect()(PriceFilter)
