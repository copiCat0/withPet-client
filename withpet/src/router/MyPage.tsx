import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'

const MyPage = () => {
  return (
    <>
      <Header title={'MyPage'} />
      <Container style={'bg-primary-100 pt-16'}>
        <Link to="/PetInfo">
          펫 추가
        </Link>
      </Container>
    </>
  )
}

export default MyPage
