import React, {useState} from "react";
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
  const [img, setImg] = useState(image1)

  function handleClickSlide(img: any) {
    setImg(img);
  }
  return (
      <div>
        <SwiperSelect img={img}/>
        <SwiperBlockStyle>
          <Swiper
              spaceBetween={26}
              grabCursor={true}
              slidesPerView={4}
              allowTouchMove={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 4,
                }
              }}
          >
            <SwiperWrapper>
              <SwiperSlide onClick={() => handleClickSlide(image1)}>
                <SlideInner image={image1}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image2)}>
                <SlideInner image={image2}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image3)}>
                <SlideInner image={image3}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image1)}>
                <SlideInner image={image1}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image2)}>
                <SlideInner image={image2}/>
              </SwiperSlide>
            </SwiperWrapper>
          </Swiper>
        </SwiperBlockStyle>
      </div>

  )
}

interface SwiperProps {
  img: any
}

const SwiperSelect = styled.div<SwiperProps>`
  max-width: 764px;
  height: 414px;
  margin-bottom: 25px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 720px) {
    height: 314px;
  }

  @media (max-width: 520px) {
    height: 240px;
  }

  @media (max-width: 430px) {
    height: 140px;
  }
`

const SwiperWrapper = styled.div`
  
`

const SwiperBlockStyle = styled.div`
  position: relative; 
  width: 100%;
  max-width: 764px;
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