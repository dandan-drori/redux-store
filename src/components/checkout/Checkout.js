import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Checkout = () => {
	const cartItems = useSelector(state => state.cart)
	let total = 0
	cartItems.map(item => {
		total = total + Number(item.price) * item.quantity
		return total
	})
	return (
		<Container>
			<Form>
				<Header>Checkout</Header>
				<Total>Total: ${total}</Total>
				<Label htmlFor='card-number'>Card Number: </Label>
				<Input id='card-number' name='card-number' placeholder='Card Number' />
				<DatesWrapper>
					<Label htmlFor='day'>Day: </Label>
					<select id='day' name='day'>
						<option value='1'>01</option>
						<option value='2'>02</option>
						<option value='3'>03</option>
						<option value='4'>04</option>
						<option value='5'>05</option>
						<option value='6'>06</option>
						<option value='7'>07</option>
						<option value='8'>08</option>
						<option value='9'>09</option>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
						<option value='19'>19</option>
						<option value='20'>20</option>
						<option value='21'>21</option>
						<option value='22'>22</option>
						<option value='23'>23</option>
						<option value='24'>24</option>
						<option value='25'>25</option>
						<option value='26'>26</option>
						<option value='27'>27</option>
						<option value='28'>28</option>
						<option value='29'>29</option>
						<option value='30'>30</option>
						<option value='31'>31</option>
					</select>
					<Label htmlFor='month'>Month: </Label>
					<select id='month' name='month'>
						<option value='1'>01</option>
						<option value='2'>02</option>
						<option value='3'>03</option>
						<option value='4'>04</option>
						<option value='5'>05</option>
						<option value='6'>06</option>
						<option value='7'>07</option>
						<option value='8'>08</option>
						<option value='9'>09</option>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
					</select>
				</DatesWrapper>
				<Label htmlFor='cvc'>CVC:</Label>
				<InputCVC type='text' id='cvc' name='cvc' placeholder='CVC' />
				<Input type='submit' value='Submit' />
			</Form>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
`

const Header = styled.p`
	font-size: 1.5em;
	font-weight: 600;
	margin-bottom: 1rem;
	text-align: center;
`

const Total = styled.p`
	font-size: 1.1em;
	text-align: center;
	margin-bottom: 1rem;
`

const Form = styled.form`
	background-color: #eee;
	padding: 2rem;
	padding-top: 1rem;
	border-radius: 15px;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
`

const Input = styled.input`
	display: block;
	margin-bottom: 1rem;
	margin-top: 0.3rem;
	padding: 0.1rem 0.3rem;
	font-size: 0.9em;
`

const Label = styled.label``

const DatesWrapper = styled.div`
	margin-bottom: 1rem;
`

const InputCVC = styled(Input)`
	width: 2.7rem;
	display: inline;
	margin-left: 0.5rem;
`

export default Checkout
