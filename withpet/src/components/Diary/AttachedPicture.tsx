import React from 'react'

const AttachedPicture = () => {
  return (
    <div className="w-full h-10 bg-Gray-100">
      <label htmlFor="attach-img" >
        <span className="flex w-full h-full justify-center items-center cursor-pointer">+ 사진첨부</span>
        <input
          id="attach-img"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  )
}

export default AttachedPicture
