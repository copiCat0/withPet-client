import React, { useState } from 'react'

const Diary: React.FC = () => {
  const [check, setCheck] = useState<number>(0)

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
    </>
  )
}

export default Diary
