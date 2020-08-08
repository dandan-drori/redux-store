import React from 'react'
import styled from 'styled-components'
import { addToCart, incrementQuantity } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton } from '../../styles/GlobalStyles'
import cogoToast from 'cogo-toast'

const Product = ({ name, price, category, quantity, imgURL }) => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart)
	return (
		<Item>
			<Image src={imgURL} alt='product' />
			<FlexWrapper>
				<ContentWrapper>
					<Detail>
						<Span>name: </Span>
						{name}
					</Detail>
					<Detail>
						<Span>price: </Span>$<MainPrice>{price.split('.')[0]}</MainPrice>
						<Remaining>{price.split('.')[1]}</Remaining>
					</Detail>
				</ContentWrapper>
				<Button
					onClick={() => {
						cogoToast.success('Item added to your cart')
						let isAlreadyInCart = false
						cartItems.forEach(item => {
							if (item.name === name) {
								isAlreadyInCart = true
							}
						})
						!isAlreadyInCart
							? dispatch(
									addToCart({
										name,
										price,
										category,
										quantity,
										imgURL,
									})
							  )
							: dispatch(
									incrementQuantity({ name, price, category, quantity, imgURL })
							  )
					}}
				>
					Add To Cart
				</Button>
			</FlexWrapper>
		</Item>
	)
}

const Item = styled.li`
	list-style: none;
	border: 1px solid black;
	border-radius: 15px;
	margin: 1rem;
`

const Image = styled.img`
	border-radius: 15px 15px 0 0;
`

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`

const ContentWrapper = styled.div`
	max-width: 70%;
`

const Button = styled(PrimaryButton)`
	height: 2.5rem;
`

const Detail = styled.p``

const Span = styled.span`
	font-size: 1.1em;
	color: #888;
`

const MainPrice = styled.span``

const Remaining = styled.span`
	font-size: 0.5em;
	text-decoration: underline;
	position: relative;
	top: -0.6em;
	margin-left: 0.07rem;
	margin-right: 0.07rem;
`

export default Product
