import React from 'react'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
// import type { User } from 'firebase/auth'

type IconProps = {
  method: 'google' | 'kakao' | 'facebook'
}

const SocialIcon: React.FC<IconProps> = ({ method }) => {
  const navigate = useNavigate()

  const socialBtnHandler = async () => {
    const auth = getAuth()

    if (method === 'google') {
      try {
        await setPersistence(auth, browserLocalPersistence)
        const provider = new GoogleAuthProvider()
        const data = await signInWithPopup(auth, provider)
        const user = data.user
        navigate('/story')
      } catch (err) {
        console.log(err)
      }
    }
    // else if (method === 'facebook') {
    // }
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
