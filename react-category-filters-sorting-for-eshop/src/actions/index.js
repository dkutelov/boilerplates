import data from '../data/data'
import {
	FETCH_PRODUCTS,
	SORT_BY,
	SELECT_BY_BRAND,
	SELECT_BY_SCREEN_SIZE,
	SELECT_BY_CAMERA,
	SELECT_BY_PRICE
} from './types'

export const fetchSurveys = () => dispatch => {
	dispatch({ type: FETCH_PRODUCTS, payload: data })
}

// FILTERS ACTIONS

// SORT_BY_DATE
export const sortBy = what => ({
	type: SORT_BY,
	payload: what
})

// SELECT BY BRAND
export const selectByBrand = brand => ({
	type: SELECT_BY_BRAND,
	payload: brand
})

// SELECT BY SCREEN SIZE
export const selectByScreenSize = screenSize => ({
	type: SELECT_BY_SCREEN_SIZE,
	payload: screenSize
})

// SELECT BY CAMERA
export const selectByCamera = camera => ({
	type: SELECT_BY_CAMERA,
	payload: camera
})

// SELECT BY PRICE
export const selectByPrice = priceRange => ({
	type: SELECT_BY_PRICE,
	payload: priceRange
})
