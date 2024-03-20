import React from "react";
import styled from "styled-components";
import SwiperProjects from "./ui/Swiper";


const PopularProjectsStyle = styled.div`
  
`

const H1Style = styled.h1`
  margin: 0 0 2.5rem 0;
  font-style: normal;
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3.1rem;
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