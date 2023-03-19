import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, dbService } from 'firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import logoSignUp from 'assets/Logo/signUpLogo.webp'

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
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'checkPassword') {
      setCheckPassword(value)
    } else if (name === 'userName') {
      setUserName(value)
    } else if (name === 'userNickName') {
      setUserNickName(value)
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value)
    }
  }

  return (
    <section className="max-w-scr flex flex-col gap-2.5">
      <img src={logoSignUp} alt="logo" className="w-72 h-40" />
      <form
        className="w-full max-w-scr flex flex-col justify-center content-center"
        onSubmit={onSubmit}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="이메일"
          required
        />
        <input type="button" value="중복확인" />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
          required
        />
        <input
          type="password"
          name="checkPassword"
          value={checkPassword}
          onChange={onChange}
          placeholder="비밀번호확인"
          required
        />
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onChange}
          placeholder="이름"
          required
        />
        <input
          type="text"
          name="userNickName"
          value={userNickName}
          onChange={onChange}
          placeholder="닉네임"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          placeholder="전화번호"
          required
        />
        <input type="submit" value="회원가입" />
        {errorMsg && <span className="authError">{errorMsg}</span>}
      </form>
    </section>
  )
}

export default SignUp
