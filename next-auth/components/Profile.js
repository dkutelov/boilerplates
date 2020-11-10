import { Component } from 'react'
import { getUserProfile } from '../lib/auth'

class Profile extends Component {
	state = { user: null }

	// fetch user data
	async componentDidMount () {
		const user = await getUserProfile()
		this.setState({ user })
	}

	render () {
		return (
			<div>
				<pre>{JSON.stringify(this.state.user, null, 2)}</pre>
			</div>
		)
	}
}

export default Profile
