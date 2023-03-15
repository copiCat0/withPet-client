import React from 'react'
import WelcomeBtn from 'components/Welcome/WelcomeBtn'
import withPetLogo from 'assets/Logo/welcomeLogo.webp'
import Container from 'components/UI/Container'

const Welcome = () => {
  return (
    <Container bg={'bg-primary-100'}>
      <img src={withPetLogo} alt="윗펫 로고" className="block mx-auto" />
      <div className="flex justify-around">
        <WelcomeBtn
          page={'/signin'}
          style={'bg-primary-200 text-white'}
          linkText={'로그인'}
        />
        <WelcomeBtn page={'/login'} style={'bg-white'} linkText={'회원가입'} />
      </div>
    </Container>
  )
}

export default Welcome
