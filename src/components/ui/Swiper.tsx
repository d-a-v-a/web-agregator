import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";
//import image1 from '../../assets/images/project_preview/image1.jpg'
//import image2 from '../../assets/images/project_preview/image2.jpg'
//import image3 from '../../assets/images/project_preview/image3.jpg'
import sliderArrow from '../../assets/images/icons/arrows/slider-arrow.svg'
import 'swiper/swiper-bundle.css'
import {Link} from "react-router-dom";
import { useData } from "../../context/DataContext";

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
  padding: 8px 36px 25px;
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
  font-weight: 500;
  font-size: 14px;
  color: var(--rgba-white-color);
`

const SlideName = styled.div`
  grid-area: name;
  font-weight: 600;
  font-size: 20px;
`

const SlideBtn = styled(Link)`
  grid-area: button;
  width: 100px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  background: linear-gradient(180deg, #60FB9E 0%, #1EFE77 0.01%, #0D9834 100%);
  border-radius: 6px;
  
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
`

function SwiperProjects(){
  const {data} = useData();
  const image1 = data?.allProjectsInformation?.[0]?.image ?? '';
  const image2 = data?.allProjectsInformation?.[1]?.image ?? '';
  const image3 = data?.allProjectsInformation?.[2]?.image ?? '';
  const image4 = data?.allProjectsInformation?.[3]?.image ?? '';

  const title1 = data?.allProjectsInformation?.[0]?.title ?? '';
  const title2 = data?.allProjectsInformation?.[1]?.title ?? '';
  const title3 = data?.allProjectsInformation?.[2]?.title ?? '';
  const title4 = data?.allProjectsInformation?.[3]?.title ?? '';

  const id1 = data?.allProjectsInformation?.[0]?.id ?? '';
  const id2 = data?.allProjectsInformation?.[1]?.id ?? '';
  const id3 = data?.allProjectsInformation?.[2]?.id ?? '';
  const id4 = data?.allProjectsInformation?.[3]?.id ?? '';
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
                  <SlideInner id={id1} image={image1} category={'Аркады'} name={title1}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner id={id2} image={image2} category={'Аркады'} name={title2}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner id={id3} image={image3} category={'Аркады'} name={title3}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner id={id4} image={image4} category={'Аркады'} name={title4}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner id={id3} image={image3} category={'Аркады'} name={title3}/>
              </SwiperSlide>
              <SwiperSlide>
                  <SlideInner id={id1} image={image1} category={'Аркады'} name={title1}/>
              </SwiperSlide>
          </SwiperWrapper>
        </Swiper>
      </SwiperBlockStyle>
  )
}

export interface SlideProps {
    image: any,
    category: string,
    name: string,
    id: number,
}

const SlideInner = ({image, category, name, id}: SlideProps) => {
  const {setValues} = useData();
  const handleClick = (id:number)=> {
    setValues({idProject: id})
  }
    return(
        <>
            <img src={image} style={{width: '100%', height:'100%'}} alt=""/>
            <SlideInfo>
                <SlideCategory>{category}</SlideCategory>
                <SlideName>{name}</SlideName>
                <SlideBtn to={'/project'} onClick={() => handleClick(id)}>Открыть</SlideBtn>
            </SlideInfo>
        </>
    )
}

export default SwiperProjects