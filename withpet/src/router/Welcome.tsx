import React, { useEffect, useState } from 'react'
import WelcomeBtn from 'components/Welcome/WelcomeBtn'
import withPetLogo from 'assets/Logo/welcomeLogo.webp'
import Container from 'components/UI/Container'

const Welcome = () => {
  const [logoOpacity, setLogoOpacity] = useState(0)
  const [btnOpacity, setBtnOpacity] = useState(0)
  const [logoY, setLogoY] = useState('translate-y-10')

  useEffect(() => {
    setTimeout(() => {
      setLogoOpacity(100)
    }, 500)
    setTimeout(() => {
      setLogoY('-translate-y-5')
    }, 2000)
    setTimeout(() => {
      setBtnOpacity(100)
    }, 2500)
  }, [])

  const btnContainer = (
    <div
      className={`flex justify-around  transition-all delay-300 ease-in opacity-${btnOpacity}`}
    >
      <WelcomeBtn
        page={'/signin'}
        style={'bg-primary-200 text-white'}
        linkText={'로그인'}
      />
      <WelcomeBtn
        page={'/login'}
        style={'bg-white hover:text-white focus:text-white'}
        linkText={'회원가입'}
      />
    </div>
  )

  return (
    <Container bg={'bg-primary-100'} justify={'justify-center'}>
      <img
        src={withPetLogo}
        alt="윗펫 로고"
        className={`block mx-auto transition-all  delay-300 ease-in opacity-${logoOpacity}   ${logoY}`}
      />
      {btnContainer}
    </Container>
  )
}

export default Welcome
