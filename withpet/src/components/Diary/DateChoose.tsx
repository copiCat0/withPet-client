import React, { useState } from 'react'

const DateChoose: React.FC = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month =
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  const date = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`
  const current = `${year}-${month}-${date}`
  const [selectedDate, setSelectedDate] = useState<string>(current)

  return (
    <div className="w-full h-16 bg-Gray-100 flex items-center p-5 shrink-0">
      <label className="grow" htmlFor="date">
        날짜
      </label>
      <input
        className="grow text-left cursor-pointer"
        type="date"
        id="date"
        max="2099-12-31"
        min="2000-01-01"
        value={selectedDate}
        onChange={e => setSelectedDate(e.target.value)}
      />
    </div>
  )
}

export default DateChoose
