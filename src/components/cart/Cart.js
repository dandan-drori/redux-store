import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../../redux/actions'
import CartItem from '../cart-item/CartItem'
import { PrimaryButton, SecondaryButton } from '../../styles/GlobalStyles'
import Modal from '../modal/Modal'
import { Link } from 'react-router-dom'

const Cart = () => {
	const cartItems = useSelector(state => state.cart)
	const dispatch = useDispatch()
	let total = 0
	cartItems.map(item => {
		total = total + Number(item.price) * item.quantity
		return total
	})
	const [isModalOpen, setIsModalOpen] = useState(false)
	const handleContinueAction = () => {
		dispatch(emptyCart())
	}
	const linkStyle = {
		textDecoration: 'none',
		color: '#fefefe',
		padding: '0.3rem 1rem',
	}
	return (
		<Container>
			<Header>My Cart</Header>
			<List>
				{cartItems.length < 1 ? (
					<EmptyMessageContainer>
						<EmptyCartMessage>Your Cart Is Empty</EmptyCartMessage>
					</EmptyMessageContainer>
				) : (
					cartItems.map((item, index) => (
						<CartItem
							key={index}
							name={item.name}
							price={item.price}
							category={item.category}
							quantity={item.quantity}
							imgURL={item.imgURL}
						/>
					))
				)}
			</List>
			<TotalPrice>
				<Span>Total:</Span> ${total.toFixed(2).toString()}
			</TotalPrice>
			<ActionButtons>
				<EmptyCartButton
					onClick={() => {
						setIsModalOpen(true)
					}}
				>
					Empty Cart
				</EmptyCartButton>
				<CheckoutButton>
					<Link to='/checkout' style={linkStyle}>
						Proceed To Checkout
					</Link>
				</CheckoutButton>
			</ActionButtons>
			<Modal
				headerText='Warning'
				contentText='You are about to remove all the items in your cart.'
				secondaryContentText='Are you sure you want to continue?'
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				continueAction={handleContinueAction}
			/>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
`

const Header = styled.p`
	font-size: 1.5em;
	margin-bottom: 1rem;
`

const List = styled.ul``

const TotalPrice = styled.p``

const Span = styled.span`
	font-size: 1.1em;
`

const ActionButtons = styled.div`
	margin-top: 1rem;
`

const EmptyCartButton = styled(SecondaryButton)`
	padding: 0.3rem 1rem;
	margin-right: 0.3rem;
`

const CheckoutButton = styled(PrimaryButton)`
	padding: 0.3rem 0;
	border: 1px solid #ff4433;
	margin-left: 0.3rem;
`

const EmptyMessageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
`

const EmptyCartMessage = styled.p`
	font-size: 1.4em;
	color: #ff4433;
`

export default Cart
