// Expenses Reducer
const productsReducerDefaultState = []

export default (state = productsReducerDefaultState, action) => {
	switch (action.type) {
		case 'FETCH_PRODUCTS':
			return action.payload
		default:
			return state
	}
}
