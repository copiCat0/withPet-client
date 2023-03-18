import React, { useState, FC } from 'react'
import logoSprite from 'assets/sprites_icon.png'
import { Link } from 'react-router-dom'

type NavigationProps = {
  title?: string
}

const Navigation: FC<NavigationProps> = ({ title }) => {
  const [activeNav, setActiveNav] = useState(title)

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-scr h-16">
      <div className="w-full leading-8 px-6 py-4 border-t border-solid border-Gray-400 flex flex-nowrap flex-row justify-between">
        <Link to="/Story" onClick={() => setActiveNav('Story')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'Story'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-1px -1px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-1px -53px',
                  }
            }
          />
        </Link>
        <Link to="/Chatting" onClick={() => setActiveNav('Chatting')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'Chatting'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-41px -3px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-41px -55px',
                  }
            }
          />
        </Link>
        <Link to="/Diary" onClick={() => setActiveNav('Diary')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'Diary'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-81px 0',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-81px -52px',
                  }
            }
          />
        </Link>
        <Link to="/WalkIndex" onClick={() => setActiveNav('WalkIndex')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'WalkIndex'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-122px -2px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-122px -54px',
                  }
            }
          />
        </Link>
        <Link to="/MyPage" onClick={() => setActiveNav('MyPage')}>
          <div
            className="w-8.9 h-8.9"
            style={
              activeNav === 'MyPage'
                ? {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-161px -1px',
                  }
                : {
                    backgroundImage: `url(${logoSprite})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-161px -53px',
                  }
            }
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
