import { combineReducers } from 'redux'

const products = (
	state = [
		{
			name: 'somerandomname',
			price: '33.99',
			category: 'shoes',
			quantity: 0,
			imgURL: 'https://placehold.it/300x150/000000/ffffff?text=test',
		},
		{
			name: 'anothername',
			price: '44.90',
			category: 'shirts',
			quantity: 0,
			imgURL: 'https://placehold.it/300x150/000000/ffffff?text=test',
		},
		{
			name: 'product',
			price: '29.99',
			category: 'pants',
			quantity: 0,
			imgURL: 'https://placehold.it/300x150/000000/ffffff?text=test',
		},
		{
			name: 'item',
			price: '19.99',
			category: 'socks',
			quantity: 0,
			imgURL: 'https://placehold.it/300x150/000000/ffffff?text=test',
		},
		{
			name: 'under',
			price: '9.99',
			category: 'underwear',
			quantity: 0,
			imgURL: 'https://placehold.it/300x150/000000/ffffff?text=test',
		},
	],
	{ type, payload }
) => {
	switch (type) {
		case 'ADD_TO_CART':
			return state.map(item =>
				item.name === payload.name
					? { ...payload, quantity: payload.quantity + 1 }
					: item
			)
		case 'REMOVE_FROM_CART':
			return state.map(item =>
				item.name === payload.name ? { ...payload, quantity: 0 } : item
			)
		case 'INCREMENT_QUANTITY':
			return state.map(item =>
				item.name === payload.name
					? { ...payload, quantity: payload.quantity + 1 }
					: item
			)
		case 'DECREMENT_QUANTITY':
			return state.map(item =>
				item.name === payload.name
					? { ...payload, quantity: payload.quantity - 1 }
					: item
			)
		default:
			return state
	}
}

const cart = (state = [], { type, payload }) => {
	switch (type) {
		case 'ADD_TO_CART':
			return [...state, { ...payload, quantity: payload.quantity + 1 }]
		case 'REMOVE_FROM_CART':
			return state.filter(item => item.name !== payload.name)
		case 'INCREMENT_QUANTITY':
			return state.map(item =>
				item.name === payload.name
					? { ...payload, quantity: payload.quantity + 1 }
					: item
			)
		case 'DECREMENT_QUANTITY':
			return state.map(item =>
				item.name === payload.name
					? { ...payload, quantity: payload.quantity - 1 }
					: item
			)
		case 'EMPTY_CART':
			return []
		default:
			return state
	}
}

const query = (state = { query: '' }, { type, payload }) => {
	switch (type) {
		case 'SET_QUERY':
			return { ...state, query: payload }
		default:
			return state
	}
}

const activeCategory = (
	state = { activeCategory: 'all' },
	{ type, payload }
) => {
	switch (type) {
		case 'SET_ACTIVE_CATEGORY':
			return { activeCategory: payload }
		default:
			return state
	}
}

export default combineReducers({ products, cart, query, activeCategory })
