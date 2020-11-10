import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

import _ from 'lodash'

import PriceFilter from './filters/PriceFilter'
import RadioFilter from './filters/RadioFilter'
import SelectFilter from './filters/SelectFilter'
import SortByDateAndPrice from './sorters/SortByDateAndPrice'
import filters from '../data/filters'

class Filters extends Component {
	renderFilter() {
		return _.chain(filters)
			.filter(filter => filter.type === 'radio' && filter.show)
			.map(filter => {
				return <RadioFilter key={filter.name} attribute={filter.name} />
			})
			.value()
	}

	render() {
		return (
			<Col xs={12} md={3}>
				<SortByDateAndPrice />
				<PriceFilter />
				{this.renderFilter()}
				<SelectFilter attribute={'brand'} />
			</Col>
		)
	}
}

export default Filters
