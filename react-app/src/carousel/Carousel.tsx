import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './carousel.css'

// // test images to fill carousel until I can figure out how to fill them with sample of the users page

import slide_image1 from '../assets/cal.png'
import slide_image2 from '../assets/calc.png'
import slide_image3 from '../assets/notePixel.png'
import slide_image4 from '../assets/prof.png'

function Carousel(){
    return (
        <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        // loop={true}
        // focusableElements={'select'}
        modules={[Pagination, EffectCoverflow, Navigation]}
        // spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth:100,
            modifier: 2,
            slideShadows: true
        }}
        navigation
        pagination = {{
            clickable:true
        }}
        // navigation= {{
        //     nextEl: '.slide-control-next',
        //     prevEl: '.slide-control-prev',

        // }}
        // pagination= {{
        //     el:'slider-pag',
        //     clickable:true
        // }}
        >
            <SwiperSlide id="addRed">
                <img src={slide_image1} alt="Calendar Slide" className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide id="addPurple">
                <img src={slide_image4} alt="Profile Slide" className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide id="addGreen">
                <img src={slide_image3} alt="Notes Slide"
                className="slide-image"/>
            </SwiperSlide>
            <SwiperSlide id='addBlue'>
                <img src={slide_image2} alt="Calculator Slide"
                className="slide-image"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel
