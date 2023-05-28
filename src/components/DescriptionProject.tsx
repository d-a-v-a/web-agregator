import React from "react";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import styled from "styled-components";
import NameProjectInput from "./ui/InputProfile";
import NameProjectTextArea from "./ui/TextAreaProfile";



const DescriptionProjectStyle = styled.div`
  flex: 1 1;
`


function DescriptionProject() {
  return (
      <DescriptionProjectStyle>
        <H2Style>Название проекта</H2Style>
        <NameProjectInput placeholder={'Введите название игры'} counter={true}/>
        <H2Style>Описание проекта</H2Style>
        <NameProjectTextArea placeholder='Описание игры...'/>
        <H2Style>Как играть</H2Style>
        <NameProjectTextArea placeholder='Как...'/>
      </DescriptionProjectStyle>
  )
}

export default DescriptionProject