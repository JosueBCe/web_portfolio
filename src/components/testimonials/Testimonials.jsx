import React from 'react'
import "./testimonials.css"
import img1 from "../../assets/avatar1.jpg"
import img2 from "../../assets/avatar2.jpg"
import img3 from "../../assets/avatar3.jpg"
import img4 from "../../assets/avatar4.jpg"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {
  return (
    <section id='Testimonials' >
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={img1} alt="" />
          </div>  
            <h5 className='client__name'>Adrew Evans</h5>
            <small className="client__review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={img2} alt="" />
          </div>  
            <h5 className='client__name'>Adrew Evans</h5>
            <small className="client__review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={img3} alt="" />
          </div>  
            <h5 className='client__name'>Adrew Evans</h5>
            <small className="client__review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={img4} alt="" />
          </div>  
            <h5 className='client__name'>Adrew Evans</h5>
            <small className="client__review">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials