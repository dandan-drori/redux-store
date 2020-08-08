import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../../styles/GlobalStyles'

const Modal = ({
	headerText,
	contentText,
	secondaryContentText,
	isModalOpen,
	setIsModalOpen,
	continueAction,
}) => {
	return (
		<Container isModalOpen={isModalOpen}>
			<ContentWrapper>
				<Header>{headerText}</Header>
				<Text>{contentText}</Text>
				<Text>{secondaryContentText}</Text>
				<ActionsWrapper>
					<Cancel
						onClick={() => {
							setIsModalOpen(false)
						}}
					>
						Cancel
					</Cancel>
					<Continue
						onClick={() => {
							continueAction()
							setIsModalOpen(false)
						}}
					>
						Continue
					</Continue>
				</ActionsWrapper>
			</ContentWrapper>
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.35);
	display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
`

const ContentWrapper = styled.div`
	padding: 1rem 3rem;
	background-color: #fefefe;
	border-radius: 15px;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
`

const Header = styled.p`
	font-size: 1.5em;
	font-weight: 600;
	margin-bottom: 1rem;
`

const Text = styled.p`
	margin-bottom: 0.2rem;
	font-size: 1.1em;
`

const ActionsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 1rem;
`

const Cancel = styled(SecondaryButton)`
	padding: 0.3rem 1rem;
	margin-right: 0.3rem;
`

const Continue = styled(PrimaryButton)`
	padding: 0.3rem 1rem;
	border: 1px solid #ff4433;
	margin-left: 0.3rem;
`

export default Modal
