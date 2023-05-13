import React from "react";
import styled from "styled-components";
import HistoryButton from "../../../assets/images/HistoryButton.svg";
import HistoryButtonActive from "../../../assets/images/HistoryButtonActive.svg";
import image1 from "../../../assets/images/image1.jpg"
import {Link} from "react-router-dom";

const CardHistoryStyled = styled(Link)`
  position: relative;
  height: 78px;
  margin-bottom: 10px;
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 23px;
  cursor: pointer;
  background-color: var(--dark-grey-color);
  
  &:hover button {
    background-image: url(${HistoryButtonActive});
  }

  &:hover + img {
    opacity: 1;
    visibility: visible;
    bottom: 100%;
  }
`

const HistoryButtonStyled = styled.button`
  width: 31px;
  height: 31px;
  background-image: url(${HistoryButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const PreviewImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition:
          visibility 0.3s ease-in-out,
          opacity 0.3s ease-in-out,
          bottom 0.3s ease-in-out;
  filter: drop-shadow(0px 4px 4px #1C1E22);
  height: 136px;
  object-fit: cover;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
`

interface CardProps {
    genreGame: string;
    nameGame: string;
    image: any;
    path: string;
}

function CardHistory({genreGame, nameGame, image, path}: CardProps) {
  return(
      <CardHistoryStyled to={path}>
        <CardInner>
            <NameGame genreGame={genreGame} nameGame={nameGame}/>
            <HistoryButtonStyled />
        </CardInner>
        <PreviewImage src={image}/>
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

export interface HistoryProps {
    title?: string;
}


const History = ({title = 'История'}: HistoryProps) => {
  return (
      <div>
        <h2>{title}</h2>
        <CardHistory path={'/project'} image={image1} genreGame={"Аркады"} nameGame={"Birdie Fall"}/>
        <CardHistory path={'/project'} image={image1} genreGame={"Аркады"} nameGame={"Merge Комбинаторика"}/>
        <CardHistory path={'/project'} image={image1} genreGame={"Аркады"} nameGame={"Night Way"}/>
      </div>
  )
}

export default History