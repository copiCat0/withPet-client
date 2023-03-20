import React, { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authAction } from 'redux/slice/user/auth-slice'
import type { User } from 'firebase/auth'

type IconProps = {
  method: 'google' | 'kakao' | 'facebook'
}

const SocialIcon: React.FC<IconProps> = ({ method }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const socialBtnHandler = async () => {
    const auth = getAuth()

    if (method === 'google') {
      const provider = new GoogleAuthProvider()
      try {
        await signInWithPopup(auth, provider)
        dispatch(authAction.login())
        navigate('/welcome')
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <button
      tabIndex={0}
      type="button"
      onClick={socialBtnHandler}
      className={`w-10 h-10 bg-sprites_icon cursor-pointer
      ${method === 'kakao' ? 'bg-[left_-1px_top_-316px]' : ''}
      ${method === 'google' ? 'bg-[left_-43px_top_-316px]' : ''}
      ${method === 'facebook' ? 'bg-[left_-85px_top_-316px]' : ''}
    `}
    >
      <span className={'sr-only'}>{`${method} 소셜로그인 버튼`}</span>
    </button>
  )
}

export default SocialIcon
