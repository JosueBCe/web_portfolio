import React from 'react'
import "./service.css"
import Lottie from "lottie-react"
import webdev from "../../assets/animations/web-dev.json"
import uiux from "../../assets/animations/uiux.json"
import Aos from 'aos'
import "aos/dist/aos.css"






import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


function Services() {
  return (
    <div className="services_container">
      <h2 className="heading">Services</h2>
      <Swiper
        effect={'coverflow'}
        scrollbar={{ draggable: true }}
        loop={true}
        slidesPerView={'auto'}
        centeredSlidesBounds={true}
        coverflowEffect={{
          rotate: 8,
          stretch: 490,
          depth: 150,
          modifier:2.7,
          
        }}
        touchAngle={70}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        speed={1000}
      >
     
        <SwiperSlide>
          <Lottie
          animationData={uiux}
          className='svg-animations'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Lottie
          animationData={webdev}
          className='svg-animations'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Lottie
          animationData={uiux}
          className='svg-animations'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Lottie
          animationData={uiux}
          className='svg-animations'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Lottie
          animationData={uiux}
          className='svg-animations'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Lottie
          animationData={webdev}
          className='svg-animations'
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}


export default Services