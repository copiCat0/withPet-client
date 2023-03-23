import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

type SubBtnProps = {
  userUid: string
}

const SubBtn: React.FC<SubBtnProps> = ({ userUid }) => {
  const [like, setLike] = useState(false)
  const currentUserUid = useSelector((state: RootState) => state.auth.userUid)

  console.log(currentUserUid)

  const likeBtnHandler = () => {
    setLike(prev => !prev)
  }

  return (
    <div className={'border border-x-0 border-b-0 flex justify-between px-1'}>
      <div className={'py-1 flex gap-3'}>
        <button
          className={'flex items-center p-1'}
          type={'button'}
          onClick={likeBtnHandler}
        >
          <svg
            aria-label="좋아요 버튼"
            className={'mr-1'}
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={` duration-100 ${
                like ? 'fill-primary-300 ' : '#000'
              }  `}
              d="M8.33333 15.2917L7.125 14.1917C2.83333 10.3 0 7.73333 0 4.58333C0 2.01667 2.01667 0 4.58333 0C6.03333 0 7.425 0.675 8.33333 1.74167C9.24167 0.675 10.6333 0 12.0833 0C14.65 0 16.6667 2.01667 16.6667 4.58333C16.6667 7.73333 13.8333 10.3 9.54167 14.2L8.33333 15.2917Z"
              fill="black"
            />
          </svg>

          <span aria-label="좋아요 개수">{1}</span>
        </button>
        <button className={'p-1'} type={'button'}>
          댓글
        </button>
        <button className={'p-1'} type={'button'}>
          공유
        </button>
      </div>
      <div
        className={`py-1 flex gap-3 ${
          userUid === currentUserUid ? '' : 'hidden'
        } `}
      >
        <button className={'p-1'} type={'button'}>
          수정
        </button>
        <button className={'p-1'} type={'button'}>
          삭제
        </button>
      </div>
    </div>
  )
}

export default SubBtn
