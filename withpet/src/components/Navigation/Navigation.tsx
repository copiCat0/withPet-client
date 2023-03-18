import React, { FC } from 'react'
import logoSprite from 'assets/sprites_icon.png'

const Navigation: FC = () => {
  return (
    <nav className="w-full max-w-scr h-16 leading-8 px-6 py-4 flex flex-nowrap flex-row justify-between">
      <div
        className="w-13 h-13"
        style={{
          backgroundImage: `url(${logoSprite})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-11px -63px',
        }}
      />
      <div
        className="w-13 h-13"
        style={{
          backgroundImage: `url(${logoSprite})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-62px -66px',
        }}
      />
      <div
        className="w-13 h-13"
        style={{
          backgroundImage: `url(${logoSprite})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-113px -62px',
        }}
      />
      <div
        className="w-13 h-13"
        style={{
          backgroundImage: `url(${logoSprite})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-165px -64px',
        }}
      />
      <div
        className="w-13 h-13"
        style={{
          backgroundImage: `url(${logoSprite})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-215px -63px',
        }}
      />
    </nav>
  )
}

export default Navigation
