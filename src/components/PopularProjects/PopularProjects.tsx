import React from "react";
import styled from "styled-components";
import SwiperProjects from "../ui/Swiper/Swiper";


const PopularProjectsStyle = styled.div`
  
`


const H1Style = styled.h1`
  margin: 0 0 25px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: var(--white-color);
`


function PopularProjects(){
  return(
      <PopularProjectsStyle>
        <H1Style>Популярные проекты</H1Style>
        <SwiperProjects/>
      </PopularProjectsStyle>
  )
}

export default PopularProjects