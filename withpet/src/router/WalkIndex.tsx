import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'
import Navigation from 'components/Navigation/Navigation'

const WalkIndex = () => {
  return (
    <>
      <Header title={'WalkIndex'} />
      <Container style={'bg-primary-100 pt-16'}>
        <Link to="/PetInfo">산책 지수</Link>
      </Container>
      <Navigation title={'walkindex'} />
    </>
  )
}

export default WalkIndex
