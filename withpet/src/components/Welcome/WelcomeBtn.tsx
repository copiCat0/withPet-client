import React from 'react'
import { Link } from 'react-router-dom'

type WelcomeBtnProps = {
  page: string
  style: string
  linkText: string | number
}

const WelcomeBtn: React.FC<WelcomeBtnProps> = ({ page, style, linkText }) => {
  return (
    <Link
      to={page}
      className={`h-14 w-[47%] flex justify-center items-center font-black border border-black shadow-btnShadow duration-200 hover:bg-Gray-400 focus:bg-Gray-400 ${style}`}
    >
      {linkText}
    </Link>
  )
}

export default WelcomeBtn
