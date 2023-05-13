import React from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import TotalRating from "../../ui/TotalRating";
import viewSvg from "../../images/views.svg"
import RatingAction from "../../RatingAction";

const StatisticsStyle = styled.div`
  margin-bottom: 50px;
`

const NumberViews = styled.div`
    margin-bottom: 25px;
`

const ViewsTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;

  color: var(--grey-title);
`

const ViewsGrid = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const ViewsIcon = styled.img`
  flex: 0 0 33px;
  height: 33px;
  object-fit: contain;
`

const ViewsCount = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: var(--white-color);
`

const Statistics = () => {
    return (
        <StatisticsStyle>
            <H2Style>Рейтинг проекта</H2Style>
            <TotalRating total={'2.5'}/>
            <NumberViews>
                <ViewsTitle>Количество игроков</ViewsTitle>
                <ViewsGrid>
                    <ViewsIcon src={viewSvg}/>
                    <ViewsCount>10,2к</ViewsCount>
                </ViewsGrid>
            </NumberViews>
            <RatingAction/>
        </StatisticsStyle>
    )
}

export default Statistics