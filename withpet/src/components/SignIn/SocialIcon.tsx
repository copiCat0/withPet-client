import React, { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authAction } from 'redux/auth-slice'
import type { User } from 'firebase/auth'

type IconProps = {
  method: 'google' | 'kakao' | 'facebook'
}

const SocialIcon: React.FC<IconProps> = ({ method }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userData, setUserData] = useState<User | null>(null)

  const socialBtnHandler = async () => {
    const auth = getAuth()

    if (method === 'google') {
      const provider = new GoogleAuthProvider()
      try {
        const data = await signInWithPopup(auth, provider)
        setUserData(data.user)
        console.log(data)
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
      ${method === 'kakao' ? 'bg-[left_-11px_top_-326px]' : ''}
      ${method === 'google' ? 'bg-[left_-53px_top_-326px]' : ''}
      ${method === 'facebook' ? 'bg-[left_-95px_top_-326px]' : ''}
    `}
    >
      <span className={'sr-only'}>{`${method} 소셜로그인 버튼`}</span>
    </button>
  )
}

export default SocialIcon
