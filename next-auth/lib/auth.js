import Router from 'next/router'
import axios from 'axios'
// needed to pass automatically the token
axios.defaults.withCredentials = true

// Run on the client
export const loginUser = async (email, password) => {
	const { data } = await axios.post('/api/login', { email, password })
	if (typeof window !== 'undefined') {
		window[WINDOW_USER_SCRIPT_VARIABLE] = data || {}
	}
}

export const logoutUser = async () => {
	// check if on the client side and clean up user data
	if (typeof window !== 'undefined') {
		window[WINDOW_USER_SCRIPT_VARIABLE] = {}
	}
	await axios.post('/api/logout')
	Router.push('/login')
}

export const getUserProfile = async () => {
	const { data } = await axios.get('/api/profile')
	return data.user
}

export const getClientSideToken = () => {
	if (typeof window !== 'undefined') {
		const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {}
		return { user }
	}
	return { user: {} }
}

export const authInitialProps = (isProtectedRoute) => ({ req, res }) => {
	// if initial loading e.g. there is request we get token from server otherwise from client
	const auth = req ? getServerSideToken(req) : getClientSideToken()
	const currentPath = req ? req.url : window.location.pathname
	const user = auth.user
	const isAnonimous = !user || user.type !== 'authenticated'
	if (isProtectedRoute && isAnonimous && currentPath !== '/login') {
		return redirectUser(res, '/login')
	}
	return { auth }
}

const redirectUser = (res, path) => {
	if (res) {
		res.redirect(302, path)
		// tell next all req res is handled
		res.finished = true
		// we need to return something to next
		return {}
	}
	// alternative to .push
	Router.replace(path)
	return {}
}

// Run on the server
export const getServerSideToken = (req) => {
	const { signedCookies = {} } = req

	if (!signedCookies) {
		return {}
	}
	else if (!signedCookies.token) {
		return {}
	}

	return { user: signedCookies.token }
}

const WINDOW_USER_SCRIPT_VARIABLE = '__USER__'

export const getUserScript = (user) => {
	return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`
}
