import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";
import image1 from '../../assets/images/project_preview/image1.jpg'
import image2 from '../../assets/images/project_preview/image2.jpg'
import image3 from '../../assets/images/project_preview/image3.jpg'
import sliderArrow from '../../assets/images/icons/arrows/slider-arrow.svg'
import 'swiper/swiper-bundle.css'
import {Link} from "react-router-dom";
import RatingPreviewProject from "../RatingPreviewProject";

const SwiperBlockStyle = styled.div`
    position: relative;
    margin-bottom: 4rem;
    width: 100%;
    max-width: 81rem;
    height: 33.7rem;
    overflow: hidden;

    .swiper {
        position: relative;
    }

    .swiper .swiper-slide {
        margin-bottom: 2.7rem;
        width: 52.6rem !important;
        height: 31rem !important;
        position: relative;
        border-radius: 2rem;
        flex-shrink: 0;
        cursor: default;
    }

    .swiper .swiper-slide::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--dark-grey-color);
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    .swiper .swiper-slide:not(.swiper-slide-active) {
        pointer-events: none;
    }

    .swiper .swiper-slide:not(.swiper-slide-active)::after {
        opacity: 0.7;
    }

    .swiper .swiper-slide img {
        border-radius: 2rem;
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
        margin-top: -2.5rem;
        cursor: pointer;

        width: 5rem;
        height: 5rem;

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
        left: 5rem;
    }

    .swiper-button-next {
        left: auto;
        right: 5rem;
    }

    .swiper-button-next::after {
        transform: rotate(180deg);
    }
`

const SwiperWrapper = styled.div`
  
`

const SlideInfo = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
        "category button"
        "name button";
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0.8rem 3.6rem 2.5rem;
  z-index: 100;

  background: linear-gradient(
          180deg, 
          rgba(34, 33, 33, 0) 0%, 
          rgba(34, 33, 33, 0.270079) 44.83%, 
          rgba(34, 33, 33, 0.39) 100%
  );
`

const SlideCategory = styled.div`
    grid-area: category;
    display: flex;
`

const CategoryStyle = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 1.3rem;
    color: var(--rgba-white-color);

    &:not(:last-child) {
        padding-right: 1rem;
    }
    
    &:not(:last-child)::after {
        content: '-';
        position: absolute;
        top: 0;
        right: 0;
        width: 1rem;
        height: 100%;
        font-size: 1.3rem;
        font-weight: 300;
        color: var(--title-blue-grey);
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    &:last-child {
        font-weight: 300;
        color: var(--title-blue-grey);
    }
    
    @media (max-width: 400px) {
        &:not(:last-child) {
            display: none;
        }
    }
`

const SlideName = styled.div`
  grid-area: name;
  font-weight: 600;
  font-size: 2rem;
`

const SlideBtn = styled(Link)`
  grid-area: button;
  width: 10rem;
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.6rem;
  background: linear-gradient(180deg, #60FB9E 0%, #1EFE77 0.01%, #0D9834 100%);
  border-radius: 6rem;
  
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
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
            allowTouchMove={false}
        >
          <SwiperWrapper>
              <SwiperSlide>
                  <SlideInner image={image1} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner image={image2} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner image={image3} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner image={image3} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner image={image3} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner image={image1} category={['Развлекательные', 'Аркады']} name={'Merge Комбинаторика'}/>
              </SwiperSlide>
          </SwiperWrapper>
        </Swiper>
      </SwiperBlockStyle>
  )
}

export interface SlideProps {
    image: any;
    category: string[];
    name: string;
}

const SlideInner = ({image, category, name}: SlideProps) => {
    const categoryBlock = category.map((_, i) => (
        <CategoryStyle key={i}>{_}</CategoryStyle>
    ))

    return(
        <>
            <img src={image} style={{width: '100%'}} alt=""/>
            <SlideInfo>
                <SlideCategory>{categoryBlock}</SlideCategory>
                <SlideName>{name}</SlideName>
                <SlideBtn to={'/project'}>Играть</SlideBtn>
            </SlideInfo>
        </>
    )
}

export default SwiperProjects