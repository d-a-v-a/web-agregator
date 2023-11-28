import React from "react";
import styled from "styled-components";
import totalStarsActive from "../../assets/images/icons/stars/total_stars_gold.svg";
import totalStarsDisable from "../../assets/images/icons/stars/total_stars_grey.svg";

interface TotalRatingProps {
    total: string;
}

const TotalRating = ({total}: TotalRatingProps) => {
    return (
        <TotalRatingStyled>
            <TotalStyled>{total}</TotalStyled>
            <StarsStyled num={Number(total)}/>
        </TotalRatingStyled>
    )
}

const TotalRatingStyled = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const TotalStyled = styled.div`
  margin-right: 10px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: var(--white-color);
`

const StarsStyled = styled.div<{ num: any }>`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  flex: 0 0 190px;
  height: 29.35px;
  
  background-image: url(${totalStarsDisable});
  background-size: 190px 29.35px;
  background-position: 0 0;
  background-repeat: no-repeat;
  
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: ${props => (props.num ? (props.num / 5) * 100 : '0')}%;
    height: 29.35px; 
    top: 0;

    background-image: url(${totalStarsActive});
    background-size: 190px 29.35px;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
`

export default TotalRating