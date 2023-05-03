import React from "react";
import styled from "styled-components";
import HistoryButton from "../../../assets/images/HistoryButton.svg";
import { H2Style } from "../FilterOnPage";



const CardHistoryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  margin-bottom: 10px;
  padding: 18px 23px;
  background-color: #2D2D2D;
  cursor: pointer;
`

function CardHistory({genreGame = '', nameGame = ""}: {genreGame: string, nameGame: string}) {
  return(
      <CardHistoryStyled>
        <NameGame genreGame={genreGame} nameGame={nameGame}/>
        <img src={HistoryButton} alt=""/>
      </CardHistoryStyled>
  )
}

const GenreGameStyle = styled.div`
  margin-bottom: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: rgba(255, 255, 255, 0.8);
`

const NameGameStyle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #FFFFFF;
`


function NameGame({genreGame = '', nameGame = ""}: {genreGame: string, nameGame: string}) {
  return(
      <div>
        <GenreGameStyle>
          {genreGame}
        </GenreGameStyle>
        <NameGameStyle>
          {nameGame}
        </NameGameStyle>
      </div>
  )
}



function History() {
  return (
      <div>
        <H2Style >История</H2Style>
        <CardHistory genreGame={"Аркады"} nameGame={"Birdie Fall"}/>
        <CardHistory genreGame={"Аркады"} nameGame={"Merge Комбинаторика"}/>
        <CardHistory genreGame={"Аркады"} nameGame={"Night Way"}/>

      </div>
  )
}

export default History