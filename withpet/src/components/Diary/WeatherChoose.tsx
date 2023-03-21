import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiary } from 'redux/slice/diary/diarySlice'
import { RootState } from 'redux/store'
import spritesIcon from 'assets/sprites_icon.png'

const WEATHERS = [
  {
    id: 'sunny',
    position: '-125px -147px',
    selectedPosition: '-124px -104px',
  },
  {
    id: 'rainy',
    position: '-84px -150px',
    selectedPosition: '-83px -108px',
  },
  {
    id: 'cloudy',
    position: '-43px -151px',
    selectedPosition: '-42px -109px',
  },
  {
    id: 'stormy',
    position: '-2px -148px',
    selectedPosition: '-1px -105px',
  },
  {
    id: 'snowy',
    position: '-167px -146px',
    selectedPosition: '-167px -104px',
  },
]

const WeatherChoose: React.FC = () => {
  const dispatch = useDispatch()
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )
  const [selectedWeather, setSelectedWeather] = useState(WEATHERS[0].id)

  const handleWeatherSelect = (weather: string) => {
    setSelectedWeather(weather)
    dispatch(getDiary({ ...diary, weather }))
  }

  return (
    <>
      <div className="flex justify-center gap-[34px] items-center w-full h-[70px] bg-Gray-100">
        {WEATHERS.map(weather => (
          <div
            key={weather.id}
            className={`w-[40px] h-[40px] gap-[10px]${
              selectedWeather === weather.id
                ? 'bg-cover bg-no-repeat bg-center cursor-pointer'
                : 'cursor-pointer'
            }`}
            style={{
              backgroundImage: `url(${spritesIcon})`,
              backgroundPosition: `${
                selectedWeather === weather.id
                  ? weather.selectedPosition
                  : weather.position
              }`,
              width: '40px',
              height: '40px',
            }}
            onClick={() => handleWeatherSelect(weather.id)}
          />
        ))}
      </div>
    </>
  )
}

export default WeatherChoose
