const next = require('next')
const express = require('express')
const axios = require('axios')
const cookieParser = require('cookie-parser')

// Variables
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const AUTH_USER_TYPE = 'authenticated'
const COOKIE_SECRET = 'ncsbsdbcksdcj' // should be ENV VAR
const COOKIE_OPTIONS = {
	httpOnly : true,
	secure   : !dev,
	signed   : true
}
const app = next({ dev })
const handle = app.getRequestHandler()

// Functions
const authenticate = async (email, password) => {
	const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
	const user = data.find((user) => {
		if (user.email === email && user.website === password) {
			return user
		}
	})
	return user
}

// App set up
app.prepare().then(() => {
	const server = express()

	// Middleware
	// no need to use bodyparser any more, it is build in express
	server.use(express.json())
	server.use(cookieParser(COOKIE_SECRET))

	// Routes
	server.post('/api/login', async (req, res) => {
		// need express.json to read the data from the body
		const { email, password } = req.body
		const user = await authenticate(email, password)
		if (!user) {
			return res.status(403).send('Invalid email or password')
		}
		const userData = {
			name  : user.name,
			email : user.email,
			type  : AUTH_USER_TYPE
		}
		// create cookie
		res.cookie('token', userData, COOKIE_OPTIONS)
		res.json(userData)
	})

	server.post('/api/logout', async (req, res) => {
		res.clearCookie('token', COOKIE_OPTIONS) // clears cookie from the browser
		res.sendStatus(204) // status ok no content
	})

	server.get('/api/profile', async (req, res) => {
		const { signedCookies = {} } = req
		const { token } = signedCookies

		if (token && token.email) {
			const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')

			const userProfile = data.find((user) => user.email === token.email)
			// need to return not to continue until the end
			return res.json({ user: userProfile })
		}
		res.sendStatus(404)
	})

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`Listening on PORT ${port}`)
	})
})
