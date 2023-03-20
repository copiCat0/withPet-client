import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiary } from 'redux/slice/diary/diarySlice'
import { RootState } from 'redux/store'
import spritesIcon from 'assets/sprites_icon.png'

const WEATHERS = [
  { id: 'sunny', position: '-120px -180px', selectedPosition: '-120px -140px' },
  { id: 'rainy', position: '-80px -180px', selectedPosition: '-80px -140px' },
  { id: 'cloudy', position: '-40px -180px', selectedPosition: '-40px -140px' },
  { id: 'stormy', position: '0px -180px', selectedPosition: '0px -140px' },
  { id: 'snowy', position: '-160px -180px', selectedPosition: '-160px -140px' },
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
      <div className="flex justify-center items-center h-70">
        {WEATHERS.map(weather => (
          <div
            key={weather.id}
            className={`w-1/5 h-full ${
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
            }}
            onClick={() => handleWeatherSelect(weather.id)}
          />
        ))}
      </div>
    </>
  )
}

export default WeatherChoose
