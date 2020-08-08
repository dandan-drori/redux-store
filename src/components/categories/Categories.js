import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActiveCategory } from '../../redux/actions'

const Categories = () => {
	const dispatch = useDispatch()
	return (
		<Container>
			<Label htmlFor='category'>Category:</Label>
			<Select
				onChange={e => {
					dispatch(setActiveCategory(e.target.value))
				}}
				name='category'
				id='category'
			>
				<Option value='all'>All</Option>
				<Option value='shoes'>Shoes</Option>
				<Option value='shirts'>Shirts</Option>
				<Option value='pants'>Pants</Option>
				<Option value='socks'>Socks</Option>
				<Option value='underwear'>Underwear</Option>
			</Select>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Label = styled.label`
	margin-right: 0.3rem;
`

const Select = styled.select`
	border-radius: 5px;
	padding: 0.2rem;
	font-size: 0.9em;
	position: relative;
	top: 0.1rem;
`

const Option = styled.option``

export default Categories
