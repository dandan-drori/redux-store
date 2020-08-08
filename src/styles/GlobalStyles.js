import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        margin: 0;
        padding: 0;
    	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }
`

export const PrimaryButton = styled.button`
	background-color: #ff4433;
	border: none;
	border-radius: 7px;
	padding: 0 0.3rem;
	cursor: pointer;
	font-weight: 500;
	color: #fefefe;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
`

export const SecondaryButton = styled.button`
	background-color: #fefefe;
	border: 1px solid #ff4433;
	border-radius: 7px;
	padding: 0 0.3rem;
	cursor: pointer;
	font-weight: 500;
	color: #ff4433;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
`

export default GlobalStyle
