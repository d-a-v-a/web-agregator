import React from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import TotalRating from "../../ui/TotalRating";
import viewSvg from "../../../assets/images/icons/eyes/views.svg"
import RatingAction from "../../RatingAction";

const Statistics = ({onlyRating = false, totalRating = '3.5'}:{onlyRating?: boolean, totalRating?: string}) => {
    return (
        <StatisticsStyle>
            <H2Style>Рейтинг проекта</H2Style>
            <TotalRating total={totalRating}/>
            <NumberViews>
                <ViewsTitle>Количество игроков</ViewsTitle>
                <ViewsGrid>
                    <ViewsIcon src={viewSvg}/>
                    <ViewsCount>10,2к</ViewsCount>
                </ViewsGrid>
            </NumberViews>
            {onlyRating ? <></> : <RatingAction/>}
        </StatisticsStyle>
    )
}

const StatisticsStyle = styled.div`
  margin-bottom: 5rem;
`

const NumberViews = styled.div`
    margin-bottom: 2.5rem;
`

const ViewsTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.8rem;

  color: var(--grey-title);
`

const ViewsGrid = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const ViewsIcon = styled.img`
  flex: 0 0 3.3rem;
  height: 3.3rem;
  object-fit: contain;
`

const ViewsCount = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  color: var(--white-color);
`

export default Statistics