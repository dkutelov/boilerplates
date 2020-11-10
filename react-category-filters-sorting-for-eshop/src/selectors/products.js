import _ from 'lodash'

export default (
	products,
	{ sortBy, slectByBrand, slectByScreenSize, slectByCamera, priceRange }
) => {
	return products
		.filter(product => {
			const brand = slectByBrand ? product.brand === slectByBrand : true
			const screen = slectByScreenSize
				? product.screenSize === slectByScreenSize
				: true
			const camera = slectByCamera ? product.camera === slectByCamera : true
			const price = _.isEmpty(priceRange)
				? true
				: product.price >= priceRange.min && product.price <= priceRange.max

			return brand && screen && camera && price
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.releaseDate < b.releaseDate ? 1 : -1
			} else if (sortBy === 'price') {
				return a.price < b.price ? 1 : -1
			}
			console.log('Not sorting')
			return 'no sort'
		})
}
