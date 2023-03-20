import React, { FC } from 'react'
import logoHeader from 'assets/Logo/headerLogo.webp'
import logoSprite from 'assets/sprites_icon.png'

type HeaderProps = {
  title?: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  let headerContent = null

  switch (title) {
    case 'Diary':
      headerContent = (
        <div
          className="w-8 h-8"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-3px -242px',
          }}
        />
      )
      break
    case 'MyPage':
      headerContent = (
        <div
          className="w-5 h-5"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-2px -276px',
          }}
        />
      )
      break
    default:
      headerContent = (
        <div
          className="w-8 h-8"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 -385px',
          }}
        />
      )
      break
  }

  return (
    <header className="absolute flex flex-row justify-between w-full gap-10 px-2 mx-auto -translate-x-1/2 border-b border-black border-solid max-w-scr h-14 leading-12 bg-primary-100 flex-nowrap left-1/2">
      <img src={logoHeader} alt="logo" />
      <p className="font-bold">{title}</p>
      <button type="button">{headerContent}</button>
    </header>
  )
}

export default Header
