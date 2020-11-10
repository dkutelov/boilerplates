// Filters Reducer
const filtersReducerDefaultState = {
	sortBy: 'date',
	slectByBrand: undefined,
	slectByScreenSize: undefined,
	slectByCamera: undefined,
	priceRange: {}
}

// if you pass state with few of the properties, the rest will not be set to the default values

//startDate: moment().subtract(60, 'days'),
export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SORT_BY':
			return {
				...state,
				sortBy: action.payload
			}
		case 'SELECT_BY_BRAND':
			return {
				...state,
				slectByBrand: action.payload
			}
		case 'SELECT_BY_SCREEN_SIZE':
			return {
				...state,
				slectByScreenSize: action.payload
			}
		case 'SELECT_BY_CAMERA':
			return {
				...state,
				slectByCamera: action.payload
			}
		case 'SELECT_BY_PRICE':
			return {
				...state,
				priceRange: action.payload
			}
		default:
			return state
	}
}
