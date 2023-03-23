import React from 'react'

const StoryTap = () => {
  return (
    <div className="flex">
      <button
        type="button"
        aria-label="전체 스토리 보기"
        className="bg-primary-200 text-white w-[100px] h-10 rounded-t-2xl font-bold"
      >
        ALL
      </button>
      <button
        type="button"
        aria-label="내 스토리만 보기"
        className="bg-Gray-200 text-Gray-400 w-[100px] h-10 rounded-t-2xl font-bold"
      >
        MY
      </button>
    </div>
  )
}

export default StoryTap
