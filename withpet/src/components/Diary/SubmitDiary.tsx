import React from 'react'
import logoSprite from 'assets/sprites_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { collection, addDoc } from 'firebase/firestore'
import { dbService } from 'firebase-config'

const SubmitDiary: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const diaryInfoObj = { ...diary, user: userUid }

    try {
      await addDoc(collection(dbService, 'diaryInfo'), diaryInfoObj)
    } catch (error) {
      console.error('Error adding document:', error)
    }
  }

  return (
    <>
      <button type="submit" onClick={e => onSubmit(e)}>
        <div
          className="w-8 h-8"
          style={{
            backgroundImage: `url(${logoSprite})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-3px -242px',
          }}
        />
      </button>
    </>
  )
}

export default SubmitDiary
