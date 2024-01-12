import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import {H1Style, PathName} from "../ProjectEditing/ProjectEditing";
import icon from "../../assets/images/project_preview/IconDisplayDownloadGame.jpg"
import unwrap from "../../assets/images/icons/unwrap.svg"
import roll_up from "../../assets/images/icons/roll_up.svg"
import {useFullscreen} from "../../context/FullScreen";
import {Link} from "react-router-dom";
import Iframe from "react-iframe";
import { useData } from "../../context/DataContext";

function Play() {

  const [state, setState] = useState({ details: [], });
  return(
      <PlayStyle>
        <H1Style>Название проекта</H1Style>
        {/* <div dangerouslySetInnerHTML={{__html: state.details.toString()}}></div> */}
        {/* {state.details} */}
        <PathName><span style={{color: '#B6B6B6'}}>Проеты &gt; </span>Страница проекта</PathName>
        <Display img={icon}/>
      </PlayStyle>
  )
    return (
        <PlayStyle>
            <H1Style>Название проекта</H1Style>
            <PathName>
            <span style={{color: '#B6B6B6'}}>
                <Link style={{display: 'inline', color: '#B6B6B6'}} to={'/'}>Проекты </Link>
            </span>
                <span> &gt; </span>
                <span> Страница проекта</span>
            </PathName>
            <Display img={icon}/>
        </PlayStyle>
    )
}

function Display({img}: { img: any }) {
    const {fullscreenRef}: any = useFullscreen();
    const {enterFullscreen}: any = useFullscreen();
    const {exitFullscreen}: any = useFullscreen();
    const {fullscreenActive}: any = useFullscreen();

    return (
        <DisplayStyle ref={fullscreenRef}>
            <GameWrap fullscreen={fullscreenActive}>
                {/* <DownloadIcon src={img}/>
                <Download>100%</Download> */}

                <DisplayUnity/>

            </GameWrap>

            {fullscreenActive ? (
                <MaximizeButton onClick={exitFullscreen}>
                    <span>Свернуть</span>
                    <img src={roll_up} alt={'Свернуть'}/>
                </MaximizeButton>
            ) : (
                <MaximizeButton onClick={enterFullscreen}>
                    <span>Развернуть</span>
                    <img src={unwrap} alt={'Развернуть'}/>
                </MaximizeButton>
            )}
        </DisplayStyle>
    )
}


function DisplayUnity() {
  const {data} = useData();
  let id = 1;
  if (data.idProject){
    id = data.idProject;
    if (id >= 4) {
      id = 1;
    }
    if (id === 3) {
      id = 1;
    }

    else if (id === 1) {
      id = 3;
    }

  }
  
  return (
    <Iframe frameBorder={0} scrolling="no" width="100%" height="100%" position="relative" display="block" url={`build${id}/index.html`}/>
  )
}

const Download = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 3.6rem;
  line-height: 150%;

  letter-spacing: -0.022em;
  color: #B3B3B3;
`

const DownloadIcon = styled.img`
  margin-bottom: 2.1rem;
  width: 20%;
`

const MaximizeButton = styled.button<{ onClick: any }>`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  span {
    color: #B6B6B6;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.528px;
    transition: 0.3s ease-in-out;
  }

  &:hover span {
    color: #C1D9E2;
  }
`

const DisplayStyle = styled.div`
  max-width: 92.6rem;
  margin: 0 auto;

  &:not(:root):fullscreen::backdrop {
    position: fixed;
    inset: 0;
    background: var(--main-bg);
  }
`

const GameWrap = styled.div<{ fullscreen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 49.5rem;
  background-color: white;

  ${({fullscreen}) => (fullscreen) ? `
    width: 100vw;
    height: calc(100vh - 6.3rem);
    
    ~ button {
        padding: 0 2rem;
    }
  ` : ''}
`

const PlayStyle = styled.div`
  margin: 0 auto 7.4rem;
  max-width: 118.4rem;
  padding: 0 2rem;
`


export default Play;