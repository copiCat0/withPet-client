import React, { useState } from 'react'

import SignInHead from 'assets/Logo/signInLogo.webp'
import Container from 'components/UI/Container'
import SignInInput from 'components/SignIn/SignInInput'
import LinkButton from 'components/UI/LinkButton'
import SignInLink from 'components/SignIn/SignInLink'
import SocialLogin from 'components/SignIn/SocialLogin'

const SignIn = () => {
  const [idValue, setIdValue] = useState('')
  const [pwValue, setPwValue] = useState('')

  const getIdVal = (value: string): void => {
    setIdValue(value)
  }
  const getPwVal = (value: string): void => {
    setPwValue(value)
  }

  return (
    <Container bg={'bg-primary-100'} justify={'justify-center'}>
      <img src={SignInHead} alt="로그인" className="block mx-auto" />
      <form>
        <fieldset>
          <legend className="sr-only">로그인 입력 폼</legend>
          <div className={'flex flex-col gap-4 mt-5'}>
            <SignInInput
              type={'text'}
              id={'userID'}
              label={'이메일'}
              inputValHandler={getIdVal}
            />
            <SignInInput
              type={'password'}
              id={'userPW'}
              label={'비밀번호'}
              inputValHandler={getPwVal}
            />
          </div>
        </fieldset>
      </form>
      <LinkButton type={'button'} page={'/home'} text={'로그인'} />

      <SocialLogin />

      <SignInLink to={'/'} text={'회원가입'} />
      <SignInLink to={'/'} text={'아이디/비밀번호 찾기'} />
    </Container>
  )
}

export default SignIn
