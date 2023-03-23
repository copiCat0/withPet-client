import React, { useState, FC } from 'react'
import logoSprite from 'assets/sprites_icon.png'
import { Link } from 'react-router-dom'

type NavigationProps = {
  title?: string
}

const Navigation: FC<NavigationProps> = ({ title }) => {
  const [activeNav, setActiveNav] = useState(title)

  return (
    <nav className="bg-white mx-auto fixed bottom-0 left-0 right-0 w-full max-w-scr h-16 z-50">
      <div className="w-full leading-8 px-6 py-4 border-t border-solid border-Gray-400 flex flex-nowrap flex-row justify-between">
        <Link to="/story" onClick={() => setActiveNav('story')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'story'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0 0',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0 -45px',
                  }
            }
          />
        </Link>
        <Link to="/chatting" onClick={() => setActiveNav('chatting')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'chatting'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-41px -2px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-41px -47px',
                  }
            }
          />
        </Link>
        <Link to="/diary" onClick={() => setActiveNav('diary')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'diary'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-82px 0',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-82px -45px',
                  }
            }
          />
        </Link>
        <Link to="/walkindex" onClick={() => setActiveNav('walkindex')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'walkindex'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-124px -1px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-124px -46px',
                  }
            }
          />
        </Link>
        <Link to="/mypage" onClick={() => setActiveNav('mypage')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'mypage'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-164px 0',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-164px -45px',
                  }
            }
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
