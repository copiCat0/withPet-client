import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { chooseWeather } from '../../redux//slice/diary/diarySlice'
import spritesIcon from '../../assets/sprites_icon.png'

const WEATHERS = [
  {
    id: 'sunny',
    width: '38px',
    height: '38px',
    selectedWidth: '40px',
    selectedHeight: '40px',
    position: '-125px -147px',
    selectedPosition: '-124px -104px',
  },
  {
    id: 'rainy',
    width: '38px',
    height: '38px',
    selectedWidth: '40px',
    selectedHeight: '40px',
    position: '-84px -150px',
    selectedPosition: '-83px -108px',
  },
  {
    id: 'cloudy',
    width: '38px',
    height: '38px',
    selectedWidth: '40px',
    selectedHeight: '40px',
    position: '-43px -151px',
    selectedPosition: '-42px -109px',
  },
  {
    id: 'stormy',
    width: '38px',
    height: '38px',
    selectedWidth: '40px',
    selectedHeight: '40px',
    position: '-2px -148px',
    selectedPosition: '-1px -105px',
  },
  {
    id: 'snowy',
    width: '38px',
    height: '38px',
    selectedWidth: '40px',
    selectedHeight: '40px',
    position: '-167px -146px',
    selectedPosition: '-167px -104px',
  },
]

const WeatherChoose: React.FC = () => {
  const dispatch = useDispatch()
  const [selectedWeather, setSelectedWeather] = useState(WEATHERS[0].id)

  const handleWeatherSelect = (id: string) => {
    setSelectedWeather(id)
    dispatch(chooseWeather(id))
  }

  return (
    <>
      <div className="flex justify-center gap-[8px] items-center w-full h-[70px] bg-Gray-100">
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
              width: `${
                selectedWeather === weather.id
                  ? weather.selectedWidth
                  : weather.width
              }`,
              height: `${
                selectedWeather === weather.id
                  ? weather.selectedHeight
                  : weather.height
              }`
            }}
            onClick={() => handleWeatherSelect(weather.id)}
          />
        ))}
      </div>
    </>
  )
}

export default WeatherChoose
