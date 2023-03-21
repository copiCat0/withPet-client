import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { storageService } from 'firebase-config'
import { deleteObject, ref } from 'firebase/storage'
import { RootState } from 'redux/store'

type Props = {
  images: string[]
  setImages: React.Dispatch<React.SetStateAction<string[]>>
}

const SwiperPicture: React.FC<Props> = ({ images, setImages }): JSX.Element => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const imgList = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup.imagesUrl,
  )

  const onFileClear = async (url: string) => {
    const reImgArr = images.filter(el => el !== url)
    setImages([...reImgArr])
    imgList.forEach(async element => {
      if (element.origin === url)
        await deleteObject(
          ref(storageService, `diaryImg/${userUid}/${element.id}`),
        )
    })
  }

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={11}
        autoplay={false}
        loop={false}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`w-full ${images.length > 0 ? 'h-[228.5px]' : 'h-0'}`}
      >
        {images &&
          images?.map((url, index) => (
            <SwiperSlide
              className="w-full h-full flex justify-center items-center relative"
              key={index}
            >
              <img
                src={url?.replace(/'/g, '')}
                key={index}
                className="object-cover w-full h-full text-center mx-auto"
              />
              <button
                className="absolute top-2 right-2 w-3 h-3 bg-sprites_icon cursor-pointer bg-[left_-40px_top_-451px]"
                onClick={() => onFileClear(url)}
              ></button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default SwiperPicture
