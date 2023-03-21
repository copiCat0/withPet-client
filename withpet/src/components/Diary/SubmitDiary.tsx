import React from 'react'
import logoSprite from 'assets/sprites_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { storageService } from 'firebase-config'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { v4 } from 'uuid'
import { addDiaryImg } from 'redux/slice/diary/diarySlice'

const SubmitDiary: React.FC = () => {
  const images = useSelector(
    (diaryState: RootState) => diaryState.diary.attachment,
  )
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )

  const dispatch = useDispatch()
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    images.forEach(async data => {
      const imagesRef = ref(storageService, `diaryImg/${userUid}/${v4()}`)
      const response = await uploadString(imagesRef, data, 'data_url')
      const imagesUrl = await getDownloadURL(response.ref)
      dispatch(addDiaryImg(imagesUrl))
    })
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
