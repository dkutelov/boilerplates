import React from 'react'

import moment from 'moment'
import { Row, Col, Button, Thumbnail } from 'react-bootstrap'

const ProductListItem = ({
	name,
	releaseDate,
	brand,
	price,
	screenSize,
	camera,
	image
}) => {
	return (
		<Col xs={12} md={4}>
			<Thumbnail src={image} alt={name} className="product-box">
				<h3>{name}</h3>
				<p>Brand: {brand}</p>
				<p>Screen size: {screenSize}</p>
				<p>Camera: {camera}</p>
				<p>Release date: {moment(releaseDate).format('MMMM Do, YYYY')}</p>
				<Row>
					<Col xs={4}>{price} EUR</Col>
					<Col xs={8}>
						<Button bsSize="small" bsStyle="primary">
							Buy
						</Button>
						<Button bsSize="small" bsStyle="default">
							More
						</Button>
					</Col>
				</Row>
			</Thumbnail>
		</Col>
	)
}

export default ProductListItem
