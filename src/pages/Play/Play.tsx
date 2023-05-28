import React from "react";
import styled from "styled-components";
import {H1Style, PathName} from "../ProjectEditing/ProjectEditing";
import icon from "../../assets/images/IconDisplayDownloadGame.jpg"

function Play() {
  return(
      <PlayStyle>
        <H1Style>Название проекта</H1Style>
        <PathName><span style={{color: '#B6B6B6'}}>Проеты &gt; </span>Страница проекта</PathName>
        <Display img={icon}/>
      </PlayStyle>
  )
}

function Display({img}:{img: any}) {
  return(
      <DisplayStyle>

        <DownloadIcon src={img}/>
        <Download>100%</Download>
        <MaximizeButton> Развернуть </MaximizeButton>
      </DisplayStyle>
  )
}

const Download = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 150%;
  
  letter-spacing: -0.022em;
  color: #B3B3B3;
`

const DownloadIcon = styled.img`
  margin-bottom: 21px;
  width: 17.82%;
`

const MaximizeButton = styled.button`
  position: absolute;
  right: 18px;
  bottom: -50px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #B3B3B3;
`

const DisplayStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 11px;
  width: 926px;
  height: 495px;
  background-color: white;
`

const PlayStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1144px;
`


export default Play;