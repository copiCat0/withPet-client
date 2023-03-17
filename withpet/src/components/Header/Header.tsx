import React, { FC } from 'react'
import logoHeader from 'assets/Logo/headerLogo.webp'
import logoSprite from 'assets/sprites_icon.png'

type HeaderProps = {
  title?: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full max-w-scr h-14 leading-12 flex flex-nowrap flex-row justify-between gap-10">
      <img src={logoHeader} alt="logo" />
      <p>{title}</p>
      <button type="button">
        <div
          className="w-8 h-8"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-13px -252px',
          }}
        />
      </button>
    </header>
  )
}

export default Header
