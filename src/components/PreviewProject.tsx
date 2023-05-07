import React from "react";
import Button from "./ui/Button";
import styled from "styled-components";
import viewsSvg from "../assets/images/views.svg"
import ratingSvg from "../assets/images/rating.svg"

const CardWrapper = styled.div`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  background-color: var(--dark-grey-color);
`

const HeadStyle = styled.div`
  cursor: pointer;
  position: relative;
  height: 136px;
  overflow: hidden;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 8px;
  
  &::before {
    content: 'СЛАЙДШОУ';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black-rgba);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover::before {
    opacity: 1;
  }
`

const DescriptionStyle = styled.div`
  padding: 12px 17px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "category button"
                         "name button";
`

const Category = styled.div`
  grid-area: category;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;

  color: rgba(255, 255, 255, 0.8);
`

const Name = styled.div`
  grid-area: name;
  font-weight: 600;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;

  color: var(--white-color);

`

const ButtonStyle = styled.div`
  grid-area: button;
  display: flex;
  align-items: center;
`

const Statistics = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 0 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`

const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  font-weight: 800;
  font-size: 10px;
  color: vat(--statistics-color);
  filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));


  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url(${viewsSvg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 800;
  font-size: 10px;
  color: vat(--statistics-color);
  filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url(${ratingSvg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));
  }
`


export interface Props {
    image: any;
    category: string;
    name: string;
    views: string;
    rating: string;
}

const PreviewProject: React.FC<Props> = ({image, category, name, views, rating}: Props) => {
    const roundViews = (num:string) => {
        if (Number(num) < 1000) {
            return num
        }
        return String((Number(num) / 1000).toFixed(1)) + 'k'
    }

    return (
        <CardWrapper>
            <HeadStyle>
                <img style={{maxWidth: '100%', objectFit: "cover"}} src={image} alt=""/>
                <Statistics>
                    <Views>{roundViews(views)}</Views>
                    <Rating>{rating}</Rating>
                </Statistics>
            </HeadStyle>
            <DescriptionStyle>
                <Category>{category}</Category>
                <Name>{name}</Name>
                <ButtonStyle>
                    <Button>Играть</Button>
                </ButtonStyle>
            </DescriptionStyle>
        </CardWrapper>
    )
}

export default PreviewProject;