import React from 'react'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'
import Navigation from 'components/Navigation/Navigation'
import dogFace from 'assets/sprites_face.png'
import WalkSmallCard from 'components/WalkIndex/WalkSmallCard'

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

const WalkIndex = () => {
  return (
    <>
      <Header title={'WalkIndex'} />
      <Container
        style={`${AIR[0].color} pt-16 flex flex-col items-center justify-center`}
      >
        <p className="mb-20">현재위치</p>
        <div
          style={{
            backgroundImage: `url(${dogFace})`,
            backgroundPosition: `${AIR[0].position}`,
            width: '200px',
            height: '200px',
            marginTop: '30px',
            marginBottom: '30px',
            flexShrink:0
          }}
        ></div>
        <h2 className="text-white text-[40px] font-bold">{AIR[0].desc}</h2>
        <div className="flex justify-center gap-6 mt-20">
          <WalkSmallCard />
        </div>
      </Container>
      <Navigation title={'walkindex'} />
    </>
  )
}

export default WalkIndex
