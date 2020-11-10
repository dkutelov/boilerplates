import Document, { Head, Main, NextScript } from 'next/document'
import { getServerSideToken, getUserScript } from '../lib/auth'

class MyDocument extends Document {
	static async getInitialProps (ctx) {
		const props = await Document.getInitialProps(ctx)
		const userData = await getServerSideToken(ctx.req)
		return { ...props, ...userData }
	}

	render () {
		const { user = {} } = this.props
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
				</body>
			</html>
		)
	}
}

export default MyDocument
