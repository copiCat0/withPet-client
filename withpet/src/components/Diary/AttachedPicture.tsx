import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storageService } from 'firebase-config'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { v4 } from 'uuid'
import { addDiaryImg } from 'redux/slice/diary/diarySlice'
import { RootState } from 'redux/store'
import SwiperPicture from './SwiperPicture'

const AttachedPicture: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const dispatch = useDispatch()
  const [images, setImages] = useState<string[]>([])
  const MAX_UPLOAD_FILES_COUNT = 4

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!
    if (!files[0]) return
    if (images.length + files.length > MAX_UPLOAD_FILES_COUNT) {
      return alert('최대 4개 사진만 첨부할 수 있습니다.')
    }
    if (files) {
      Array.from(files).forEach(file => {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          const reader = new FileReader()
          reader.onload = async e => {
            const { result } = e.target as FileReader
            const data = result as string
            setImages(prev => [...prev, data])

            const imagesRef = ref(storageService, `diaryImg/${userUid}/${v4()}`)
            const response = await uploadString(imagesRef, data, 'data_url')
            const imagesUrl = await getDownloadURL(response.ref)
            dispatch(addDiaryImg(imagesUrl))
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  return (
    <>
      <form className="w-full h-10 bg-Gray-100" encType="multipart/form-data">
        <label htmlFor="attach-img">
          <span className="flex w-full h-full justify-center items-center cursor-pointer">
            + 사진첨부
          </span>
          <input
            id="attach-img"
            type="file"
            multiple
            accept=".jpg, .jpeg, .png, .gif"
            className="hidden"
            onChange={onFileChange}
          />
        </label>
      </form>
      <SwiperPicture images={images} setImages={setImages} />
    </>
  )
}

export default AttachedPicture
