import React from 'react'
import { useState, useEffect } from 'react'
import "./service.css"
import Lottie from "lottie-react"
import webdev from "../../assets/animations/web-dev.json"
import uiux from "../../assets/animations/uiux.json"
import mobiledev from "../../assets/animations/mobiledev.json"
import multi from "../../assets/animations/multi.json"
import automation from "../../assets/animations/automation.json"
import Cta from '../cta/cta'
import "aos/dist/aos.css"






import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


function Services() {
  const [swiperModifier, setSwiperModifier] = useState(1.9);
  const [functionCalled, setFunctionCalled] = useState(false);

  useEffect(() => {
    const handleModifierByScreenWidth = () => {
      window.innerWidth > 1024
        ? setSwiperModifier(4)
        : window.innerWidth <= 1024 && window.innerWidth >= 700
        ? setSwiperModifier(2.5)
        : setSwiperModifier(2);

      setFunctionCalled(true);
    };

    handleModifierByScreenWidth();
    console.log(swiperModifier);
  }, []);

  return (
    <div className="services_container">
      <h2 className="heading" id="services">Services</h2>
      <Cta text={"<- Drag ->"}/>
      {functionCalled && (
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
            modifier: swiperModifier,
          }}
        touchAngle={70}
        /* pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }} */
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        speed={1000}
      >

        <SwiperSlide>
          <div>
            <Lottie
              animationData={uiux}
              className='svg-animations'

            />
            <p>UI/UX Design</p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Lottie
              animationData={automation}
              className='svg-animations'

            />
            <p>Software Automation</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Lottie
              animationData={webdev}
              className='svg-animations'

            />
            <p>Responsive Web Development</p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Lottie
              animationData={mobiledev}
              className='svg-animations'

            />
            <p>Mobile App Development</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Lottie
              animationData={multi}
              className='svg-animations'

            />
            <p>Multiplatform Development</p>
          </div>
        </SwiperSlide>

        {/* 
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>)}
     
    </div>
  );
}


export default Services