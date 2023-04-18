import React from "react";
import "./PopularProjects.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination} from "swiper";
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'

const PopularProjects = () => {
    const settings = {
        'centeredSlides': true,
        'spaceBetween': 80,
        'slidesPerView': 3,
        'navigation': {
            'nextEl': '.swiper-button-next',
            'prevEl': '.swiper-button-prev',
        },
        'allowTouchMove': false,
        'pagination': {
            'clickable': true
        }
    }

    return (
        <div>
            <h2 className='title-popular'>Популярные проекты</h2>
            <div className='slider'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    {...settings}
                >
                    <SwiperSlide>
                        <img src={image1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt=""/>
                    </SwiperSlide>

                    <div className="swiper-tools">
                        <div className="swiper-nav">
                            <div className="swiper-button-prev">  </div>
                            <div className="swiper-button-next"> </div>
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )}

export default PopularProjects