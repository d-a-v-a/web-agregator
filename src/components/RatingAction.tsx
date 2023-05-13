import React, {useState} from "react";
import styled from "styled-components";

const RatingActionStyle = styled.div`

`

const TitleStyle = styled.div`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: var(--title-blue-grey);
`

const GridStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
`

const StarsStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const StarStyled = styled.div<{ active?: boolean }>`
  cursor: pointer;
  padding-right: 10px;
  
  &:first-child {
    padding-right: 0;
  }
  
  svg path {
    transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
  }

  svg path {
    fill: ${props => 
            (props.active ? 'var(--gold-bg)' : '')};
  }
  
  &:hover svg path, &:hover ~ div svg path {
    fill: var(--gold-bg);
    stroke: var(--statistics-color);
  }
`

const RatingCount = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: var(--white-color);
`

interface StarProps {
    value: number,
    setRating: any,
    rating: number
}

const RatingStar = ({value, rating, setRating}: StarProps) => {
    const onClickHandler = () => {
        setRating(value)
    }

    return (
        <StarStyled active={value <= rating} onClick={onClickHandler}>
            <svg width="28" height="27" viewBox="0 0 28 27" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5023 1.71609L14.0907 1.11943L13.6791
                            1.71609L9.24238 8.14803L1.75422 10.38L1.05957 10.5871L1.49985
                            11.1629L6.24596 17.3701L6.05475 25.1815L6.03702 25.9061L6.7207
                            25.6653L14.0907 23.0696L21.4607 25.6653L22.1444 25.9061L22.1266
                            25.1815L21.9354 17.3701L26.6815 11.1629L27.1218 10.5871L26.4272
                            10.38L18.939 8.14803L14.5023 1.71609Z" fill="transparent" stroke="#9082A2"/>
            </svg>
        </StarStyled>
    )
}

const RatingAction = () => {
    const [rating, setRating] = useState(3)

    return (
        <RatingActionStyle>
            <TitleStyle>Оценить проект</TitleStyle>
            <GridStyle>
                <StarsStyled>
                    <RatingStar rating={rating} setRating={setRating} value={5}/>
                    <RatingStar rating={rating} setRating={setRating} value={4}/>
                    <RatingStar rating={rating} setRating={setRating} value={3}/>
                    <RatingStar rating={rating} setRating={setRating} value={2}/>
                    <RatingStar rating={rating} setRating={setRating} value={1}/>
                </StarsStyled>
                <RatingCount>{rating}</RatingCount>
            </GridStyle>
        </RatingActionStyle>
    )
}

export default RatingAction