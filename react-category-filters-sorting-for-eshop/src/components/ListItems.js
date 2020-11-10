import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

import { fetchSurveys } from '../actions'
import selectProducts from '../selectors/products'

import ProductListItem from './ProductListItem'

class ListItems extends Component {
	componentDidMount() {
		this.props.fetchSurveys()
	}

	render() {
		return (
			<Col xs={12} md={9}>
				<Row>
					<p>Products List</p>
					{this.props.products.map(product => {
						return <ProductListItem key={product.name} {...product} />
					})}
				</Row>
			</Col>
		)
	}
}

const mapStateToProps = state => {
	return {
		products: selectProducts(state.products, state.filters)
	}
}

export default connect(mapStateToProps, { fetchSurveys })(ListItems)
