import React from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { oradoresList } from './oradoresList';
import OradorCard from './OradorCard';

const OradoresCarousel = () => {
  return (
    <div>
      <div className="w-[300px] tablet:w-[600px] laptop1:w-[900px] m-auto">

        <Swiper
          loop={false}
          centeredSlides={false}
          navigation={true} // Enable navigation arrows
          modules={[Navigation]} // Add the Navigation module
          breakpoints={{
            360: {
              slidesPerView: 1, // Para pantallas pequeñas
            },
            768: {
              slidesPerView: 2, // Para pantallas más grandes
            },
            1024: {
              slidesPerView: 4, // Para pantallas muy grandes
            },
          }}
        >
          {oradoresList.map((orador) => (
            <SwiperSlide key={orador.id}>
              <OradorCard orador={orador} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default OradoresCarousel
