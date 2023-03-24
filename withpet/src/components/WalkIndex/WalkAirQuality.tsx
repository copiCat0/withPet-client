import React from 'react'
import dogFace from 'assets/sprites_face.png'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

interface Air {
  id: number
  position: string
  desc: string
  color: string
}

export const AIR: Air[] = [
  {
    id: 1,
    position: '0px 0px',
    desc: '최고',
    color: 'bg-Air-100',
  },
  {
    id: 2,
    position: '-225px 0px',
    desc: '좋음',
    color: 'bg-Air-200',
  },
  {
    id: 3,
    position: '-450px 0px',
    desc: '양호',
    color: 'bg-Air-300',
  },
  {
    id: 4,
    position: '-675px 0px',
    desc: '보통',
    color: 'bg-Air-400',
  },
  {
    id: 5,
    position: '-900px 0px',
    desc: '나쁨',
    color: 'bg-Air-500',
  },
  {
    id: 6,
    position: '-1125px 0px',
    desc: '상당히 나쁨',
    color: 'bg-Air-600',
  },
  {
    id: 7,
    position: '-1350px 0px',
    desc: '매우 나쁨',
    color: 'bg-Air-700',
  },
  {
    id: 8,
    position: '-1575px 0px',
    desc: '최악',
    color: 'bg-Air-800',
  },
]
const WalkAirQuality = () => {
  const loading = useSelector(
    (walkState: RootState) => walkState.walk.walkLoading,
  )

  return (
    <>
      {loading ? (
        ''
      ) : (
        <div
          style={{
            backgroundImage: `url(${dogFace})`,
            backgroundPosition: `${AIR[0].position}`,
            width: '200px',
            height: '200px',
            marginTop: '30px',
            marginBottom: '30px',
            flexShrink: 0,
          }}
        ></div>
      )}
    </>
  )
}

export default WalkAirQuality
