import React, { useState } from 'react'

const Diary: React.FC = () => {
  const [check, setCheck] = useState<number>(0)
  const now = new Date()
  const year = now.getFullYear()
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  const date = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`
  const current = `${year}-${month}-${date}`

  const [selectedDate, setSelectedDate] = useState<string>(current)

  return (
    <>
      <div>
        <input
          type="radio"
          id="public-btn"
          checked={check === 1}
          onChange={() => setCheck(1)}
        />
        <label htmlFor="public-btn">공개</label>
        <input
          type="radio"
          id="private-btn"
          checked={check === 2}
          onChange={() => setCheck(2)}
        />
        <label htmlFor="private-btn">비공개</label>
      </div>
      <h2>제목</h2>
      <label htmlFor="date">날짜</label>
      <input
        type="date"
        id="date"
        max="2099-12-31"
        min="2000-01-01"
        value={selectedDate}
        onChange={e => setSelectedDate(e.target.value)}
      />
    </>
  )
}

export default Diary
