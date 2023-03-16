import React from 'react'
import { useNavigate } from 'react-router-dom'

type BtnProps = {
  page: string
  text: string | number
  type: 'button' | 'submit' | 'reset' | undefined
}

const LinkButton: React.FC<BtnProps> = ({ page, text, type }) => {
  const navigate = useNavigate()

  return (
    <button
      type={type}
      onClick={() => {
        navigate(page)
      }}
      className={
        'h-14 w-full text-white flex justify-center items-center font-black border border-black shadow-btnShadow bg-primary-200 mt-5 hover:bg-Gray-400 duration-200'
      }
    >
      {text}
    </button>
  )
}

export default LinkButton
