import LoginForm from '../components/LoginForm'
import Layout from '../components/Layout'
import { authInitialProps } from '../lib/auth'

const Login = (props) => (
	<Layout title="Login" {...props}>
		<LoginForm />
	</Layout>
)

Login.getInitialProps = authInitialProps()

export default Login
