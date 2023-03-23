import React from 'react'
import spritesIcon from 'assets/sprites_icon.png'

const WalkSmallCard = () => {
  return (
    <div className="bg-white w-28 h-32 flex flex-col items-center justify-center rounded-xl p-4">
      <div
        style={{
          backgroundImage: `url(${spritesIcon})`,
          backgroundPosition: '-3px -189px',
          width: '24px',
          height: '30px',
        }}
      ></div>
      <h3>현재온도</h3>
      <p>18℃</p>
    </div>
  )
}

export default WalkSmallCard
