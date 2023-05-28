import React from "react";
import styled from "styled-components";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";

const AboutStyled = styled.div`

`

const AboutTitleStyle = styled.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

const ButtonAbout = styled.button`
  min-width: 71px;
  height: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: var(--contacts-color);
  border-radius: 3px;
  border: 1px solid var(--light-grey-color);
  
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  
  &:disabled {
    cursor: auto;
    opacity: 0.25;
  }
`

const AboutSwiperContainer = styled.button`

`

const About = () => {
    return (
        <AboutStyled>
            <AboutTitleStyle>
                <H2Style>Об игре</H2Style>
                <BtnsWrapper>
                    <ButtonAbout disabled>HTML5</ButtonAbout>
                    <ButtonAbout>Git</ButtonAbout>
                </BtnsWrapper>
            </AboutTitleStyle>
            <AboutSwiperContainer>

            </AboutSwiperContainer>
        </AboutStyled>
    )
}

export default About