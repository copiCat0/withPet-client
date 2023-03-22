import { WEATHERS } from 'components/Diary/WeatherChoose'
import React, { useEffect, useState } from 'react'

type StoryWriterProps = {
  DiaryWeather: string
  userName: string
}

const StoryWriter: React.FC<StoryWriterProps> = ({
  DiaryWeather,
  userName,
}) => {
  const [position, setPosition] = useState('bg-[left_-124px_top_-104px]')

  // 프롭스로 넘어온 날씨랑 같은 배열 찾기
  const weather = WEATHERS.filter(item => item.id === DiaryWeather)

  // 그 배열에서 좌표값만 구하기
  const weatherPosition = (arg: string) => {
    const arr = arg.split('px ')

    return arr.map(num => parseInt(num))
  }

  // 좌표
  const weatherImgPosion = weatherPosition(weather[0].selectedPosition)
  const weatherBgPosition = `bg-[left_${weatherImgPosion[0]}px_top_${weatherImgPosion[1]}px]`

  console.log(weatherBgPosition)

  useEffect(() => {
    setPosition(weatherBgPosition)
  }, [])

  return (
    <div className={'flex items-center justify-between'}>
      <div className={'flex items-center mt-2 text-sm'}>
        <div
          className={
            'w-14 h-14 mr-3 rounded-full bg-sprites_icon bg-[left_-58px_top_-190px] bg-slate-700 overflow-hidden'
          }
        >
          <img
            className={'object-cover h-full w-full'}
            src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg"
            alt=""
          />
        </div>
        <div className={'flex flex-col'}>
          <span className={'font-bold'}>{userName}</span>
          <span className={'font-normal'}>Mar 06, 2023</span>
        </div>
      </div>
      <div
        aria-label={'날씨 글자 삽입'}
        className={`w-10 h-10  bg-sprites_icon ${position}`}
        // 'w-10 h-10  bg-sprites_icon bg-[left_-42px_top_-109px]'
        // `w-10 h-10  bg-sprites_icon ${position}`
      ></div>
    </div>
  )
}

export default StoryWriter
