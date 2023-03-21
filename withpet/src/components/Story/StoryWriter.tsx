import React from 'react'

const StoryWriter = () => {
  const WEATHERS = [{ type: 'sunny' }]

  return (
    <div className={'flex items-center justify-between'}>
      <div className={'flex items-center mt-2 text-sm'}>
        <div
          className={
            'w-14 h-14 mr-3 rounded-full bg-sprites_icon bg-[left_-58px_top_-190px] bg-slate-700 overflow-hidden'
          }
        >
          <img
            className={'object-cover h-full w-full'}
            src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg"
            alt=""
          />
        </div>
        <div className={'flex flex-col'}>
          <span className={'font-bold'}>채하은</span>
          <span className={'font-normal'}>Mar 06, 2023</span>
        </div>
      </div>
      <div className={'w-10 h-10 bg-slate-400'}></div>
    </div>
  )
}

export default StoryWriter
