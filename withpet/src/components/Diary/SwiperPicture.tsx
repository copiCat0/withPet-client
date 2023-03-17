import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import cbtn from 'assets/close_button.png'

type Props = {
  images: string[]
  setImages: React.Dispatch<React.SetStateAction<string[]>>
}

const SwiperPicture: React.FC<Props> = ({ images, setImages }): JSX.Element => {
  const onFileClear = (index: number) => {
    const reImgArr = images.filter((el, idx) => idx !== index)
    setImages([...reImgArr])
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
        className={`w-full ${images.length > 0 ? 'h-[150px]' : 'h-0'}`}
      >
        {images &&
          images?.map((url, index) => (
            <SwiperSlide
              className="w-full h-[150px] flex justify-center items-center relative"
              key={index}
            >
              <img
                src={url?.replace(/'/g, '')}
                key={index}
                className="object-cover w-full h-[150px] text-center mx-auto"
              />
              <button
                className="absolute top-0 right-0 px-2 py-2 text-primary-300"
                onClick={() => onFileClear(index)}
              >
                <img src={cbtn} className="w-3" />
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default SwiperPicture
