import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import styled from "styled-components";



const SlideInner = ({image}: SlideProps) => {
  return (
      <img src={image} style={{width: '100%'}} alt=""/>

  )
}

export interface SlideProps {
  image: any,
}


function SwiperAboutProject() {
  return (
      <SwiperBlockStyle>
        <Swiper
            spaceBetween={26}
            grabCursor={true}
            slidesPerView={4}
            allowTouchMove={true}
        >
          <SwiperWrapper>
            <SwiperSlide>
              <SlideInner image={image1}/>
            </SwiperSlide>
            <SwiperSlide>
              <SlideInner image={image2}/>
            </SwiperSlide>
            <SwiperSlide>
              <SlideInner image={image3}/>
            </SwiperSlide>
            <SwiperSlide>
              <SlideInner image={image3}/>
            </SwiperSlide>
            <SwiperSlide>
              <SlideInner image={image3}/>
            </SwiperSlide>
          </SwiperWrapper>
        </Swiper>
      </SwiperBlockStyle>
  )
}

const SwiperWrapper = styled.div`

`

const SwiperBlockStyle = styled.div`
  position: relative; 
  width: 100%;
  max-width: 764px;
  height: 162px;
  overflow: hidden;

  .swiper {
    position: relative;
  }

  .swiper .swiper-slide {
    margin-bottom: 27px;
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
  }
`


export default SwiperAboutProject