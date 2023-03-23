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
import { storageService } from 'firebase-config'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const SubmitDiary: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )
  const imgGroup = useSelector(
    (diaryState: RootState) => diaryState.diary.imgGroup,
  )
  const [able, setAble] = useState<boolean>(true)

  useEffect(() => {
    if (
      diary.pet === '' ||
      diary.text === '' ||
      diary.title === '' ||
      imgGroup[0].id === ''
    ) {
      setAble(true)
    } else {
      setAble(false)
    }
  }, [diary])

  const onSubmit = async () => {
    const imgArr = [{ id: '', url: '' }]
    const createTime = moment().format('YYYYMMDDHHmmss')
    imgGroup.forEach(async file => {
      const imgName = file.id
      const imagesRef = ref(storageService, `diaryImg/${userUid}/${imgName}`)
      const response = await uploadString(imagesRef, file.origin, 'data_url')
      const imgUrl = await getDownloadURL(response.ref)
      if(imgArr[0].id === ''){
        imgArr.shift()
      }
      imgArr.push({ id: imgName, url: imgUrl })
    })

    const diaryInfoObj = {
      ...diary,
      user: userUid,
      createTime: createTime,
      id: new Date().getTime(),
      imagesUrl: imgArr,
    }

    try {
      console.log(diaryInfoObj)
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
