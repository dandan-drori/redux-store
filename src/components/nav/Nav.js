import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Nav = () => {
	const linkStyle = {
		color: 'white',
		textDecoration: 'none',
		position: 'relative',
	}
	const cartItems = useSelector(state => state.cart)
	let numOfItems = 0
	cartItems.map(item => {
		numOfItems = numOfItems + item.quantity
		return numOfItems
	})
	return (
		<Container>
			<Link to='/' style={{ ...linkStyle, marginLeft: '3rem' }}>
				Shop
			</Link>
			<List>
				<Item>
					<Link to='/cart' style={linkStyle}>
						<ShoppingCartIcon />
						<Span numOfItems={numOfItems}>{numOfItems}</Span>
					</Link>
				</Item>
			</List>
		</Container>
	)
}

const Container = styled.div`
	width: 100;
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #eb353c;
`

const List = styled.ul`
	display: flex;
	justify-content: space-evenly;
	margin-right: 3rem;
`

const Item = styled.li`
	list-style: none;
`

const ShoppingCartIcon = styled(FaShoppingCart)`
	font-size: 1.3em;
`

const Span = styled.span`
	width: 0.8rem;
	height: 0.8rem;
	position: absolute;
	border-radius: 50%;
	left: 0.7rem;
	top: -0.4rem;
	background-color: orange;
	color: black;
	font-weight: 800;
	text-align: center;
	font-size: 0.6em;
	display: ${({ numOfItems }) => (numOfItems < 1 ? 'none' : 'inline')};
`

export default Nav
