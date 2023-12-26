import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import image1 from "../../assets/images/project_preview/image1.jpg";
import image2 from "../../assets/images/project_preview/image2.jpg";
import image3 from "../../assets/images/project_preview/image3.jpg";
import styled from "styled-components";



const SlideInner = ({image, number, currentNumber}: SlideProps) => {
  let opacity;
  if (currentNumber === number) {
    opacity = '1';
  }
  else {
    opacity = '0.2';
  }
  return (
  <>
    <img src={image} style={{width: '100%', opacity: opacity}} alt=""/>
  </>
  )
}

export interface SlideProps {
  image: any,
  number: number,
  currentNumber: number,
}


function SwiperAboutProject() {

  const [currentNumber, setCurrentNumber] = useState(1)
  const [img, setImg] = useState(image1)

  function handleClickSlide(img: any, number: number) {
    setImg(img);
    setCurrentNumber(number);
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
              <SwiperSlide onClick={() => handleClickSlide(image1, 1)}>
                <SlideInner currentNumber={currentNumber} image={image1} number={1}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image2, 2)}>
                <SlideInner currentNumber={currentNumber} image={image2} number={2}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image3, 3)}>
                <SlideInner currentNumber={currentNumber} image={image3} number={3}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image1, 4)}>
                <SlideInner currentNumber={currentNumber} image={image1} number={4}/>
              </SwiperSlide>
              <SwiperSlide onClick={() => handleClickSlide(image2, 5)}>
                <SlideInner currentNumber={currentNumber} image={image2} number={5}/>
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
  max-width: 76.4rem;
  height: 41.4rem;
  margin-bottom: 2.5rem;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 720px) {
    height: 31.4rem;
  }

  @media (max-width: 520px) {
    height: 24rem;
  }

  @media (max-width: 430px) {
    height: 14rem;
  }
`

const SwiperWrapper = styled.div`
  
`

const SwiperBlockStyle = styled.div`
  position: relative; 
  width: 100%;
  max-width: 76.4rem;
  overflow: hidden;

  .swiper {
    position: relative;
  }

  .swiper .swiper-slide {
    margin-bottom: 2.7rem;
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
  }
`


export default SwiperAboutProject