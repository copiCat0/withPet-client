import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'
import Navigation from 'components/Navigation/Navigation'

const Chatting = () => {
  return (
    <>
      <Header title={'Chatting'} />
      <Container style={'bg-primary-100 pt-16'}>
        <Link to="/PetInfo">채팅 봇</Link>
      </Container>
      <Navigation title={'chatting'} />
    </>
  )
}

export default Chatting
