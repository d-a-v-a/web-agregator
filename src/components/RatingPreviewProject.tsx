import React from "react";
import styled from "styled-components";
import voices_svg from "../assets/images/icons/voices.svg"
import prize_place_default from "../assets/images/icons/place_flag/place_default.svg"
import prize_place_1 from "../assets/images/icons/place_flag/place_1.svg"
import prize_place_2 from "../assets/images/icons/place_flag/place_2.svg"
import prize_place_3 from "../assets/images/icons/place_flag/place_3.svg"
import {Link} from "react-router-dom";

const CardWrapper = styled.div<{ place: number }>`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-grey-color);
  margin-bottom: 10px;
  padding: 23px 28px 21px 10px;
  border-left: 2px solid transparent;

  @media (max-width: 829px) {
    row-gap: 10px;
  }

  ${({place}) => (place == 1) ?
          `border-color: #E99D02; 
           background: 
            linear-gradient(0deg, rgba(255, 188, 15, 0.07) 0%, rgba(255, 188, 15, 0.07) 100%);
           ` :
          (place == 2) ?
              `border-color: #6B8AAA; 
               background: 
                linear-gradient(0deg, rgba(137, 194, 226, 0.07) 0%, rgba(137, 194, 226, 0.07) 100%);
               ` :
              (place == 3) ?
                  `border-color: #C55F10; 
                   background: 
                    linear-gradient(0deg, rgba(197, 95, 16, 0.07) 0%, rgba(197, 95, 16, 0.07) 100%);
                  ` : ''
  }
`

const InfoProject = styled.div`
  flex: 0 1 382px;
`

const Description = styled.div`
  color: rgba(255, 255, 255, 0.65);

  font-size: 13px;
  font-weight: 300;
  margin-top: 4px;
`

const Category = styled.div`
  color: #D0E6EE;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.05;

  span {
    color: rgba(255, 255, 255, 0.80);
    font-weight: 500;
  }
`

const Name = styled.div`
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
`

const VoicesStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 10px;

  color: #C1D9E2;
  font-size: 13px;
  font-weight: 600;

  img {
    flex: 0 0 18px;
    height: 18px;
    object-fit: contain;
  }

  @media (max-width: 829px) {
    width: 100%;
  }
`

const ImageStyle = styled.div`
  flex: 0 1 167px;
  height: 87px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  @media (max-width: 829px) {
    order: -1;
    margin-top: 20px;
  }
`

const ButtonStyle = styled(Link)`
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

const ButtonWrap = styled.div`
  @media (max-width: 829px) {
    width: 100%;
  }
`

const PlaceStyle = styled.div<{ place: number }>`
  position: absolute;
  top: 0;
  left: 12px;
  width: 20px;
  height: 32px;

  background-repeat: no-repeat;
  background-position: left top;
  background-size: contain;
  background-image: url('${prize_place_default}');

  ${({place}) => (place == 1) ?
    `background-image: url('${prize_place_1}');` : 
        (place == 2) ? 
            `background-image: url('${prize_place_2}');` :
                (place == 3) ? 
                    `background-image: url('${prize_place_3}');` : ''
  }
  &::before {
    content: '${p => (p.place ? p.place : 0)}';
    position: absolute;
    left: 0;
    top: 5px;
    width: 100%;
    height: 100%;
    color: #D0E6EE;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.7px;
  }

  ${({place}) => (place == 1 || place == 2 || place == 3) ? `
      &::after {
        content: 'место';
        position: absolute;
        left: 120%;
        top: 6px;
        color: #B6B6B6;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: -0.78px;
      }
  ` : ''}
`

export interface Props {
    image: any;
    category: string;
    name: string;
    path: string;
    voices: string;
    desc: string;
    prevCategory: string;
    place: number;
}

const PreviewProject: React.FC<Props> = ({place, voices, image, prevCategory, category, name, path, desc}: Props) => {
    return (
        <CardWrapper place={place}>
            <PlaceStyle place={place}/>
            <VoicesStyle>
                <img src={voices_svg} alt=""/>
                {voices}
            </VoicesStyle>
            <ImageStyle>
                <img src={image} alt=""/>
            </ImageStyle>
            <InfoProject>
                <Category><span>{prevCategory}</span> - {category}</Category>
                <Name>{name}</Name>
                <Description>{desc}</Description>
            </InfoProject>
            <ButtonWrap>
                <ButtonStyle to={path}>Играть</ButtonStyle>
            </ButtonWrap>
        </CardWrapper>
    )
}

export default PreviewProject;