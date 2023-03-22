import React, { useEffect, useState } from 'react'
import logoSprite from 'assets/sprites_icon.png'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'redux/store'
import { collection, addDoc } from 'firebase/firestore'
import { dbService } from 'firebase-config'
import { resetDiary } from 'redux/slice/diary/diarySlice'
import moment from 'moment'
import 'moment/locale/ko'

const SubmitDiary: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )
  const [able, setAble] = useState<boolean>(true)

  useEffect(() => {
    if (
      diary.pet === '' ||
      diary.text === '' ||
      diary.title === '' ||
      diary.imagesUrl[0].url === ''
    ) {
      setAble(true)
    } else {
      setAble(false)
    }
  }, [diary])

  const onSubmit = async () => {
    const createTime = moment().format('YYYYMMDDHHmmss')
    const diaryInfoObj = { ...diary, user: userUid, createTime: createTime }

    try {
      await addDoc(collection(dbService, 'diaryInfo'), diaryInfoObj)
    } catch (error) {
      console.error('Error adding document:', error)
    }
    dispatch(resetDiary())
    navigate('/story')
  }

  return (
    <>
      <button
        type="submit"
        onClick={onSubmit}
        disabled={able}
        aria-label="전송 버튼"
      >
        <div
          className="w-8 h-8"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: able ? '-51px -242px' : '-3px -242px',
          }}
        />
      </button>
    </>
  )
}

export default SubmitDiary
