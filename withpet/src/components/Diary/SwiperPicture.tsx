import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

type Props = {
  images: string[]
}

const SwiperPicture: React.FC<Props> = ({ images }): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={11}
        autoplay={false}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`w-full ${images.length > 0 ? 'h-[150px]' : 'h-0'}`}
      >
        {images &&
          images?.map(url => (
            <SwiperSlide
              className="w-full h-[150px] flex justify-center items-center"
              key={url}
            >
              <img
                src={url?.replace(/'/g, '')}
                key={url}
                className="object-cover w-full h-[150px] text-center mx-auto"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default SwiperPicture
