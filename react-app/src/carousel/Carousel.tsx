import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './carousel.css'

// // test images to fill carousel until I can figure out how to fill them with sample of the users page

// import slide_image1 from '../assets/img1.png'
// import slide_image2 from '../assets/img2.png'
// import slide_image3 from '../assets/img3.png'

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
            <SwiperSlide id="addRed">Calendar</SwiperSlide>
            <SwiperSlide id='addBlue'>Profile</SwiperSlide>
            <SwiperSlide id="addGreen">Notes</SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}

export default Carousel
