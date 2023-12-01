import React from "react";
import styled from "styled-components";
import HistoryButton from "../../../assets/images/icons/play/HistoryButton.svg";
import HistoryButtonActive from "../../../assets/images/icons/play/HistoryButtonActive.svg";
import image1 from "../../../assets/images/project_preview/image1.jpg"
import {Link} from "react-router-dom";

const CardHistoryStyled = styled(Link)`
  position: relative;
  height: 7.8rem;
  margin-bottom: 1rem;
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.3rem;
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
  width: 3.1rem;
  height: 3.1rem;
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
  filter: drop-shadow(0 0.4rem 0.4rem #1C1E22);
  height: 13.6rem;
  object-fit: cover;
  -webkit-border-radius: 0.8rem;
  -moz-border-radius: 0.8rem;
  border-radius: 0.8rem;
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
  margin-bottom: 0.3rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;

  color: rgba(255, 255, 255, 0.8);
`

const NameGameStyle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;

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