import React from "react";
import Button from "./ui/Button";
import styled from "styled-components";
import viewsSvg from "../assets/images/icons/eyes/views.svg"
import ratingSvg from "../assets/images/icons/stars/rating.svg"

export interface Props {
    image: any;
    category: string;
    name: string;
    views: string;
    rating: string;
    path: string;
}

/**
 * a item component of the project list on the main page
 * @param image
 * @param category
 * @param name
 * @param views
 * @param rating
 * @param path
 * @constructor
 */
const PreviewProject: React.FC<Props> = ({image, category, name, views, rating, path}: Props) => {
    /**
     * The function of replacing 000 by k in large numbers
     * @param num
     */
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
                    <Button to={path}>Играть</Button>
                </ButtonStyle>
            </DescriptionStyle>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 2rem;
  background-color: var(--dark-grey-color);
`

const HeadStyle = styled.div`
  cursor: pointer;
  position: relative;
  height: 13.6rem;
  overflow: hidden;
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 0.8rem;
  
  &::before {
    content: 'СЛАЙДШОУ';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8rem;
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
  padding: 1.2rem 1.7rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "category button"
                         "name button";
`

const Category = styled.div`
  grid-area: category;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;

  color: rgba(255, 255, 255, 0.8);
`

const Name = styled.div`
  grid-area: name;
  font-weight: 600;
  font-size: 1.2rem;
  font-style: normal;
  line-height: 1.5rem;

  color: var(--white-color);

`

const ButtonStyle = styled.div`
  grid-area: button;
  display: flex;
  align-items: center;
`

const Statistics = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  padding: 0 1.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`

const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  font-weight: 800;
  font-size: 1rem;
  color: vat(--statistics-color);
  filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));


  &::before {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
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
  gap: 0.4rem;

  font-weight: 800;
  font-size: 1rem;
  color: vat(--statistics-color);
  filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));

  &::before {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${ratingSvg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(0px 1px 0px rgba(134, 115, 250, 0.4));
  }
`

export default PreviewProject;