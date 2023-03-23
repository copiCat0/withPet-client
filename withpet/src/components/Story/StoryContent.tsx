import React, { useRef, useState } from 'react'

type StoryContentProps = {
  title: string
  content: string
}

const StoryContent: React.FC<StoryContentProps> = ({ content, title }) => {
  const [more, setMore] = useState(false)
  const moreBtn = useRef<HTMLButtonElement | null>(null)

  const moreBtnHandler = () => {
    setMore(prev => !prev)
    if (!more && moreBtn.current)
      (moreBtn.current as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
  }

  return (
    <section className={'mt-3 p-1'}>
      <h2 className={' text-xl font-bold leading-6 '}>{title}</h2>
      <p className={`mt-3 ${more ? '' : 'line-clamp-2'}`}>{content}</p>
      <button
        type={'button'}
        onClick={moreBtnHandler}
        ref={moreBtn}
        className={'block mx-auto text-sm p-1 my-2 text-Gray-300 font-semibold'}
      >
        {more ? '숨기기' : '더보기'}
      </button>
    </section>
  )
}

export default StoryContent
