import React, { useRef, useState } from 'react'

const StoryContent = () => {
  const [more, setMore] = useState(false)
  const moreBtn = useRef<HTMLButtonElement | null>(null)

  const moreBtnHandler = () => {
    setMore(prev => !prev)
    if (more && moreBtn.current)
      (moreBtn.current as HTMLElement).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={'mt-3'}>
      <h2 className={' text-xl font-bold leading-6 '}>제목 영역입니다~~~~~</h2>
      <p className={`mt-3 ${more ? '' : 'line-clamp-2'}`}>
        못할 이는 이 있는 트고, 있다. 전인 바이며, 황금시대를 돋고, 봄바람이다.
        보는 끝에 꾸며 위하여 날카로우나 길지 그리하였는가? 고행을 대중을 얼마나
        대한 이상의 불어 물방아 뿐이다. 어디 인간의 없는 있다. 이상을 기쁘며,
        구하지 따뜻한 것이다. 발휘하기 거친 따뜻한 칼이다. 이상이 따뜻한
        아름답고 생의 노래하며 있는가? 그들은 보이는 그러므로 작고 아니더면,
        창공에 뛰노는 때문이다. 든 광야에서 가슴이 보배를 끓는 싶이 설레는 길지
        사랑의 봄바람이다. 인생에 살았으며, 열락의 이것이다.
      </p>
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
