import React from 'react'
import spritesIcon from 'assets/sprites_icon.png'

interface SmallCard {
  title: string
  position: string
  width: string
  height: string
  count: number
  unit: string
}
export const SMCARD: SmallCard[] = [
  {
    title: '현재온도',
    position: '-3px -189px',
    width: '24px',
    height: '30px',
    count: 18,
    unit: '℃',
  },
  {
    title: '강수량',
    position: '-41px -189px',
    width: '30px',
    height: '29px',
    count: 0,
    unit: 'mm',
  },
  {
    title: '미세먼지',
    position: '-83px -189px',
    width: '28px',
    height: '30px',
    count: 20,
    unit: '㎍/㎥',
  },
]

const WalkSmallCard = () => {
  return (
    <div className="flex justify-center gap-6 mt-20">
      {SMCARD.map((data, idx) => (
        <div
          className="bg-white w-28 h-32 flex flex-col items-center justify-center rounded-xl p-4"
          key={idx}
        >
          <div
            style={{
              backgroundImage: `url(${spritesIcon})`,
              backgroundPosition: `${data.position}`,
              width: `${data.width}`,
              height: `${data.height}`,
              marginBottom: '8px',
            }}
          ></div>
          <h3>{data.title}</h3>
          <p>
            {data.count}
            {data.unit}
          </p>
        </div>
      ))}
    </div>
  )
}

export default WalkSmallCard
