import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shop from './components/shop/Shop'
import Cart from './components/cart/Cart'
import Nav from './components/nav/Nav'
import Checkout from './components/checkout/Checkout'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path='/' exact>
					<Shop />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/checkout'>
					<Checkout />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
