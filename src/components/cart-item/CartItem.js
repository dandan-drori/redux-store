import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { PrimaryButton } from '../../styles/GlobalStyles'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import {
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
} from '../../redux/actions'

const CartItem = ({ name, price, category, quantity, imgURL }) => {
	const dispatch = useDispatch()
	return (
		<Item>
			<Image src={imgURL} alt='cart item' />
			<ContentContainer>
				<div>
					<Detail>Name: {name}</Detail>
					<Detail>
						<Span>price: </Span>$
						<MainPrice>
							{(Number(price) * quantity).toFixed(2).toString().split('.')[0]}
						</MainPrice>
						<Remaining>
							{(Number(price) * quantity).toFixed(2).toString().split('.')[1]}
						</Remaining>
					</Detail>
					<Detail>
						Quantity:{' '}
						<QuantityButton
							onClick={() =>
								quantity < 2
									? dispatch(
											removeFromCart({
												name,
												price,
												category,
												quantity,
												imgURL,
											})
									  )
									: dispatch(
											decrementQuantity({
												name,
												price,
												category,
												quantity,
												imgURL,
											})
									  )
							}
						>
							<FaMinus />
						</QuantityButton>
						{quantity}
						<QuantityButton
							onClick={() =>
								dispatch(
									incrementQuantity({ name, price, category, quantity, imgURL })
								)
							}
						>
							<FaPlus />
						</QuantityButton>
					</Detail>
				</div>
				<ActionsContainer>
					<Button
						onClick={() =>
							dispatch(
								removeFromCart({ name, price, category, quantity, imgURL })
							)
						}
					>
						<FaTrash />
					</Button>
				</ActionsContainer>
			</ContentContainer>
		</Item>
	)
}

const Item = styled.li`
	display: flex;
	align-items: center;
	list-style: none;
	border: 1px solid black;
	border-radius: 10px;
	margin-bottom: 1rem;
`

const Image = styled.img`
	width: 4rem;
	height: 4.7rem;
	border-radius: 10px 0 0 10px;
`

const ContentContainer = styled.div`
	padding: 0.3rem 0.3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

const Detail = styled.p`
	display: flex;
`

const Span = styled.span`
	font-size: 1.1em;
	color: #888;
`

const MainPrice = styled.span``

const Remaining = styled.span`
	font-size: 0.5em;
	text-decoration: underline;
	position: relative;
	top: 0.35em;
	margin-left: 0.07rem;
	margin-right: 0.07rem;
`

const QuantityButton = styled(PrimaryButton)`
	padding: 0.1rem 0.2rem;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 0.1rem;
	margin-right: 0.1rem;
`

const ActionsContainer = styled.div`
	padding: 0.3rem 1rem;
`

const Button = styled(PrimaryButton)`
	padding: 0.5rem;
`

export default CartItem
