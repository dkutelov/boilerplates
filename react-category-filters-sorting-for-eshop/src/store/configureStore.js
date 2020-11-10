import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import productsReducer from '../reducers/products'
import filtersReducer from '../reducers/filters'

const composeEmhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
	const store = createStore(
		combineReducers({
			products: productsReducer,
			filters: filtersReducer
		}),
		composeEmhancers(applyMiddleware(thunk))
	)

	return store
}
