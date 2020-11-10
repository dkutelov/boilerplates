import Profile from '../components/Profile'
import Layout from '../components/Layout'
import { authInitialProps } from '../lib/auth'

const ProfilePage = (props) => (
	<Layout title="Profile" {...props}>
		<Profile />
	</Layout>
)

ProfilePage.getInitialProps = authInitialProps(true)

export default ProfilePage
