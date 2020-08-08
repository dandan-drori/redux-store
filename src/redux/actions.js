export const setQuery = query => {
	return { type: 'SET_QUERY', payload: query }
}

export const addToCart = item => {
	return { type: 'ADD_TO_CART', payload: item }
}

export const removeFromCart = item => {
	return { type: 'REMOVE_FROM_CART', payload: item }
}

export const incrementQuantity = item => {
	return { type: 'INCREMENT_QUANTITY', payload: item }
}

export const decrementQuantity = item => {
	return { type: 'DECREMENT_QUANTITY', payload: item }
}

export const setActiveCategory = category => {
	return { type: 'SET_ACTIVE_CATEGORY', payload: category }
}

export const emptyCart = () => {
	return { type: 'EMPTY_CART' }
}
