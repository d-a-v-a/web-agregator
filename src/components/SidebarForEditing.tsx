import React from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import Selector from "./ui/Selector";

const SidebarForEditingStyle = styled.div`
  & button {
    margin-bottom: 10px;
    width: 260px;
    height: 50px;

    background-color: #5A9DF5;
    border-radius: 3px;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    
    color: var(--white-color);
  }
`

const PublicationNotice = styled.div`
  margin-bottom: 35px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #47FFA7;
`

const FileName = styled.div`
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: rgba(182, 182, 182, 0.94);`

function SidebarForEditing() {
  return(
      <SidebarForEditingStyle>
        <H2Style style={{marginBottom: '8px'}}>Статус проекта</H2Style>
        <PublicationNotice>Проект опубликован</PublicationNotice>
        <Button>Загрузить файл</Button>
        <FileName>Загружено: название.zip 15 Мб</FileName>
        <Selector labelSelector={'Трек проекта'}></Selector>
        <Selector labelSelector={'Категория проекта'}></Selector>
        <Selector labelSelector={'Тема проекта'}></Selector>
        <Selector labelSelector={'Команда разработки'}></Selector>
      </SidebarForEditingStyle>
  )
}

export default SidebarForEditing