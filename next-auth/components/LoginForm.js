import { Component } from 'react'
import { loginUser } from '../lib/auth'
import Router from 'next/router'

export class LoginForm extends Component {
	state = {
		email     : 'Sincere@april.biz',
		password  : 'hildegard.org',
		error     : '',
		isLoading : false
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = (event) => {
		const { email, password } = this.state
		this.setState({ error: '', isLoading: true })
		event.preventDefault()
		loginUser(email, password)
			.then(() => {
				Router.push('/profile')
			})
			.catch(this.showError)
	}

	showError = (error) => {
		console.log(error)
		error = error.response && (error.response.data || error.message)
		this.setState({ error, isLoading: false })
	}

	render () {
		const { email, password, error, isLoading } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />
				</div>
				<div>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={password}
						onChange={this.handleChange}
					/>
				</div>
				<button disabled={isLoading} type="submit">
					Submit{isLoading && 'ting'}
				</button>
				{error && <div>{error}</div>}
			</form>
		)
	}
}

export default LoginForm
