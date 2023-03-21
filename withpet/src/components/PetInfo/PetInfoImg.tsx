import 'components/App/App.css'
import React, { useState } from 'react'
import { RootState } from 'redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getPetImg } from 'redux/slice/petInfo/petInfoSlice'
import { storageService } from 'firebase-config'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const PetInfoImg: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const [attachment, setAttachment] = useState<string>('')
  const [image, setImage] = useState<boolean>(false)
  const dispatch = useDispatch()
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const theFile = files[0]
      const reader = new FileReader()
      reader.onload = async e => {
        const { result } = e.target as FileReader
        if (result) {
          const data = result as string
          setAttachment(data)

          const imgName = theFile.name
          const imgRef = ref(storageService, `petImg/${userUid}/${imgName}`)
          const response = await uploadString(imgRef, data, 'data_url')
          const imgUrl = await getDownloadURL(response.ref)

          dispatch(getPetImg(imgUrl))
        }
      }
      reader.readAsDataURL(theFile)
    }
    setImage(true)
  }

  return (
    <div role="fileBox" onChange={onFileChange} className="relative">
      {image ? (
        <>
          {attachment && (
            <label
              htmlFor="petImg"
              tabIndex={0}
              className="relative top-0 z-50 block bg-transparent w-32 h-32 mb-3 rounded-full cursor-pointer"
            />
          )}
        </>
      ) : (
        <label
          htmlFor="petImg"
          tabIndex={0}
          className="block bg-white w-32 h-32 mb-3 rounded-full border-2 border-black cursor-pointer"
        />
      )}

      <input
        id="petImg"
        name="petImg"
        type="file"
        accept="img/*"
        className="-z-50 absolute w-3 h-3 top-2/4 right-2/4"
        required
      />
      {attachment && (
        <div className="absolute w-32 h-32 rounded-full top-0 overflow-hidden border-2 border-black">
          <img
            src={attachment}
            alt="추가 이미지"
            className="w-full h-full object-cover "
          />
        </div>
      )}
    </div>
  )
}

export default PetInfoImg
