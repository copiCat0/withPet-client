import React, { useEffect, useState } from 'react'
import SwiperPicture from './SwiperPicture'

const AttachedPicture: React.FC = () => {
  const [images, setImages] = useState<string[]>([])
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!
    if (!files[0]) return
    if (images.length + files.length > 4) {
      return alert('최대 4개 사진만 첨부할 수 있습니다.')
    }
    const readAndPreview = (file: any) => {
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        const reader = new FileReader()
        reader.onload = () =>
          setImages(prev => [...prev, reader.result as string])
        reader.readAsDataURL(file)
      }
    }
    if (files) {
      [].forEach.call(files, readAndPreview)
    }
    console.log('함수 안', images)
  }

  console.log('함수 바깥', images)

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
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
        </label>
      </form>

      {images &&
        images.map(url => {
          <img src={url.substring(1, -1)} />
        })}

      <SwiperPicture />
    </>
  )
}

export default AttachedPicture
