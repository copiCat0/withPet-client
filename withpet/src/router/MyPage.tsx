import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'
import Navigation from 'components/Navigation/Navigation'
import MyPageSection from 'components/MyPage/MyPageSection'

const MyPage = () => {
  return (
    <>
      <Header title={'MyPage'} />
      <Container style={'bg-primary-100 pt-16'}>
        <MyPageSection text="나의 반려동물">
          <div>여긴 MyPet 컴포넌트자리</div>
          <Link to="/PetInfo">펫 추가</Link>
          <div>여긴 라인</div>
        </MyPageSection>
        <MyPageSection text="히스토리">
          <div>여긴 캘린더 자리</div>
        </MyPageSection>
      </Container>
      <Navigation title={'mypage'} />
    </>
  )
}

export default MyPage
