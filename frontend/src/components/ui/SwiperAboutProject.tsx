import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import img1 from "../../assets/images/project_preview/image1.jpg";
import img2 from "../../assets/images/project_preview/image2.jpg";
import img3 from "../../assets/images/project_preview/image3.jpg";
import styled from "styled-components";
import { useData } from "../../context/DataContext";

export interface SlideProps {
  image: any,
  number: number,
  currentNumber: number,
}

/**
 * a swiper component with project pictures
 * @constructor
 */
function SwiperAboutProject() {
  const {data, setValues} = useData();
  const [currentNumber, setCurrentNumber] = useState(1)

  let image1 = img1;
  let image2 = img2;
  let image3 = img3;

  if (data.idProject && data.idProject <= data.allProjectsInformation.length) {
    const img = data.allProjectsInformation[data.idProject-1].image;
    image1 = image2 = image3 = img;
    
  }

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

/**
 * a component of a separate slide
 * @param image
 * @param number
 * @param currentNumber
 * @constructor
 */
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