import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";
import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import sliderArrow from '../../../assets/images/slider-arrow.svg'
import 'swiper/swiper-bundle.css'

const SwiperBlockStyle = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  max-width: 810px;
  height: 337px;
  overflow: hidden;
  
  .swiper {
    position: relative;
  }
  
  .swiper .swiper-slide{
    margin-bottom: 27px;
    width: 526px !important;
    height: 310px !important;
    position: relative;
    border-radius: 20px;
    flex-shrink: 0;
  }
  
  .swiper .swiper-slide img {
    border-radius: 20px;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: var(--white-color) !important;
    transition: opacity 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    opacity: 0.45;
  }


  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 45%;
    margin-top: -25px;
    cursor: pointer;

    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    content: url(${sliderArrow});
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-size: contain;
  }

  .swiper-button-prev {
    left: 50px;
  }

  .swiper-button-next {
    left: auto;
    right: 50px;
  }

  .swiper-button-next::after {
    transform: rotate(180deg);
  }
`

const SwiperWrapper = styled.div`
  position: absolute;
  left: -100px;
  right: -100px;
  top: 0;
  bottom: 0;
`


function SwiperProjects(){
  return (
      <SwiperBlockStyle>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            spaceBetween={0}

            grabCursor={true}
            effect={'coverflow'}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 304,
              depth: 100,
              modifier: 1.132,
            }}
            slidesPerView={"auto"}
        >
          <SwiperWrapper>
            <SwiperSlide><img src={image1} style={{width: '100%'}} alt=""/></SwiperSlide>
            <SwiperSlide><img src={image3} style={{width: '100%'}} alt=""/></SwiperSlide>
            <SwiperSlide><img src={image2} style={{width: '100%'}} alt=""/></SwiperSlide>
            <SwiperSlide><img src={image2} style={{width: '100%'}} alt=""/></SwiperSlide>

          </SwiperWrapper>
        </Swiper>
      </SwiperBlockStyle>

  )
}
export default SwiperProjects