import React, { Component } from 'react'

import { Grid, Row, Navbar, Jumbotron, Button } from 'react-bootstrap'

import './App.css'
import ListItems from './components/ListItems'
import Filters from './components/Filters'

class App extends Component {
	render() {
		return (
			<div>
				<Navbar inverse fixedTop>
					<Grid>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="/">React App</a>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
					</Grid>
				</Navbar>
				<Jumbotron>
					<Grid>
						<h1>Welcome to React</h1>
						<p>
							<Button
								bsStyle="success"
								bsSize="large"
								href="http://react-bootstrap.github.io/components.html"
								target="_blank">
								View React Bootstrap Docs
							</Button>
						</p>
					</Grid>
				</Jumbotron>
				<Grid>
					<Row className="show-grid">
						<Filters />
						<ListItems />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
