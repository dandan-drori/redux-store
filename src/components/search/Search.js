import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from '../../redux/actions'

const Search = () => {
	const query = useSelector(state => state.query.query)
	const dispatch = useDispatch()
	const handleChange = e => {
		dispatch(setQuery(e.target.value))
	}
	return (
		<Container>
			<Input
				type='text'
				value={query}
				onChange={handleChange}
				placeholder='Search Products...'
			/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Input = styled.input`
	padding: 0.35rem;
	border-radius: 6px;
	border: none;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
	font-size: 0.9em;
`

export default Search
