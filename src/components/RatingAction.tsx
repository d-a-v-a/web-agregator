import React from "react";
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

const StarsStyle = styled.div`
 
`

const RatingCount = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: var(--white-color);
`

const RatingAction = () => {
    return (
        <RatingActionStyle>
            <TitleStyle>Оценить проект</TitleStyle>
            <GridStyle>
                <StarsStyle />
                <RatingCount></RatingCount>
            </GridStyle>
        </RatingActionStyle>
    )
}

export default RatingAction