import React, { useState }  from 'react'

const PublicChoose: React.FC = () => {
  const [check, setCheck] = useState<number>(0)

  return (
      <div className="shrink-0">
        <label
          className={`mr-6 relative radio-before cursor-pointer ${
            check === 0 ? 'radio-after' : ''
          }`}
          htmlFor="public-btn"
        >
          <input
            className="hidden absolute"
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
            className="hidden absolute"
            type="radio"
            id="private-btn"
            checked={check === 1}
            onChange={() => setCheck(1)}
          />
          <span className="relative inline-block pl-8 text-xs">비공개</span>
        </label>
      </div>
  )
}

export default PublicChoose
