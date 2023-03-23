import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, dbService } from 'firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import logoSignUp from 'assets/Logo/signUpLogo.webp'
import Container from 'components/UI/Container'
import SignUpInput from 'components/SignUp/SignUpInput'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [userNickName, setUserNickName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'checkPassword':
        setCheckPassword(value)
        break
      case 'userName':
        setUserName(value)
        break
      case 'userNickName':
        setUserNickName(value)
        break
      case 'phoneNumber':
        setPhoneNumber(value)
        break
      default:
        break
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      const docRef = await addDoc(collection(dbService, 'userInfo'), {
        email: email,
        password: password,
        checkPassword: checkPassword,
        userName: userName,
        userNickName: userNickName,
        phoneNumber: phoneNumber,
        createdAt: new Date(),
      })
      setEmail('')
      setPassword('')
      setCheckPassword('')
      setUserName('')
      setUserNickName('')
      setPhoneNumber('')
    } catch (error: any) {
      switch (error.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다')
          break
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다')
          break
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다')
          break
      }
      console.log(error.message)
    }
  }

  return (
    <Container style={'bg-primary-100 justify-center'}>
      <section className="max-w-scr py-6 flex flex-col gap-2.5 justify-center items-center">
        <img src={logoSignUp} alt="logo" className="h-40 w-72" />
        <form
          className="flex flex-col items-center justify-center w-full gap-6 max-w-scr"
          onSubmit={onSubmit}
        >
          <SignUpInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일"
            required
          />
          <input
            type="button"
            value="중복확인"
            className="font-bold text-white border-2 border-black border-solid w-85 h-14 bg-primary-200 shadow-100"
          />
          <SignUpInput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호"
            required
          />
          <SignUpInput
            id="checkPassword"
            type="password"
            name="checkPassword"
            value={checkPassword}
            onChange={onChange}
            placeholder="비밀번호확인"
            required
          />
          <SignUpInput
            id="userName"
            type="text"
            name="userName"
            value={userName}
            onChange={onChange}
            placeholder="이름"
            required
          />
          <SignUpInput
            id="userNickName"
            type="text"
            name="userNickName"
            value={userNickName}
            onChange={onChange}
            placeholder="닉네임"
            required
          />
          <SignUpInput
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            placeholder="전화번호"
            required
          />
          <input
            type="submit"
            value="회원가입"
            className="font-bold text-white border-2 border-black border-solid w-85 h-14 bg-primary-200 shadow-100"
          />
          {errorMsg && (
            <span className="text-xs text-left text-primary-300">
              {errorMsg}
            </span>
          )}
        </form>
      </section>
    </Container>
  )
}

export default SignUp
