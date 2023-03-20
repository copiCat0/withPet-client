import AttachedPicture from 'components/Diary/AttachedPicture'
import WeatherChoose from 'components/Diary/WeatherChoose'
import SelectedPet from 'components/Diary/SelectedPet'
import React, { useState } from 'react'
import Container from 'components/UI/Container'
import Header from 'components/Header/Header'

const Diary: React.FC = () => {
  const [check, setCheck] = useState<number>(0)
  const now = new Date()
  const year = now.getFullYear()
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  const date = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`
  const current = `${year}-${month}-${date}`

  const [selectedDate, setSelectedDate] = useState<string>(current)
  const [textCount, setTextCount] = useState<number>(0)

  return (
    <>
      <Header title={'Diary'} />
      <Container style={'bg-primary-100 gap-4 pb-20 items-start pt-16'}>
        <SelectedPet />
        <div className="">
          <label
            className={`mr-6 relative radio-before cursor-pointer ${
              check === 0 ? 'radio-after' : ''
            }`}
            htmlFor="public-btn"
          >
            <input
              className="absolute hidden"
              type="radio"
              id="public-btn"
              checked={check === 0}
              onChange={() => setCheck(0)}
            />
            <span className="relative inline-block pl-8 text-xs">공개</span>
          </label>
          <label
            className={`relative radio-before cursor-pointer ${
              check === 1 ? 'radio-after' : ''
            }`}
            htmlFor="private-btn"
          >
            <input
              className="absolute hidden"
              type="radio"
              id="private-btn"
              checked={check === 1}
              onChange={() => setCheck(1)}
            />
            <span className="relative inline-block pl-8 text-xs">비공개</span>
          </label>
        </div>
        <h2 className="w-full h-16 font-bold">
          <input
            className="w-full h-full text-2xl text-center"
            type="text"
            placeholder="제목"
            maxLength={21}
            required
          />
        </h2>
        <div className="flex items-center w-full h-16 p-5 bg-Gray-100">
          <label className="grow" htmlFor="date">
            날짜
          </label>
          <input
            className="text-left cursor-pointer grow"
            type="date"
            id="date"
            max="2099-12-31"
            min="2000-01-01"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </div>
        <WeatherChoose />
        <AttachedPicture />
        <div className="relative w-full">
          <textarea
            className="w-full p-4 text-justify resize-none bg-Gray-100"
            name="description"
            cols={30}
            rows={10}
            placeholder="내용을 입력해주세요."
            maxLength={300}
            onChange={e => setTextCount(e.target.value.length)}
          ></textarea>
          <p className="absolute right-2 bottom-3 text-Gray-300">{`(${textCount}/300)`}</p>
        </div>
      </Container>
    </>
  )
}

export default Diary
