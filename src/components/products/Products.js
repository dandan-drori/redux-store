import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Product from '../product/Product'

const Products = () => {
	const products = useSelector(state => state.products)
	const query = useSelector(state => state.query.query)
	const activeCategory = useSelector(
		state => state.activeCategory.activeCategory
	)
	return (
		<Container>
			<ProductsGrid>
				{!query && activeCategory === 'all'
					? products.map((product, index) => (
							<Product
								key={index}
								name={product.name}
								price={product.price}
								category={product.category}
								quantity={product.quantity}
								imgURL={product.imgURL}
							/>
					  ))
					: query && activeCategory === 'all'
					? products
							.filter(product => product.name.includes(query))
							.map((product, index) => (
								<Product
									key={index}
									name={product.name}
									price={product.price}
									category={product.category}
									quantity={product.quantity}
									imgURL={product.imgURL}
								/>
							))
					: products
							.filter(product => product.name.includes(query))
							.filter(product => product.category === activeCategory)
							.map((product, index) => (
								<Product
									key={index}
									name={product.name}
									price={product.price}
									category={product.category}
									quantity={product.quantity}
									imgURL={product.imgURL}
								/>
							))}
			</ProductsGrid>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

const ProductsGrid = styled.ul`
	display: flex;
	flex-wrap: wrap;
`

export default Products
