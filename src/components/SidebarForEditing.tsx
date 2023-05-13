import React from "react";
import styled from "styled-components";
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

const ButtonStyle = styled.button`
  width: 100%;
  height: 51px;
  background: var(--blue-bg);
  border-radius: 3px;
  transition: background-color 0.3s ease-in-out;

  font-weight: 600;
  font-size: 20px;
  color: var(--white-color);
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--blue-light-bg);
  }

  &:active {
    background-color: var(--blue-dark-bg);
  }
`

function SidebarForEditing() {
  return(
      <SidebarForEditingStyle>
        <H2Style style={{marginBottom: '8px'}}>Статус проекта</H2Style>
        <PublicationNotice>Проект опубликован</PublicationNotice>
        <ButtonStyle>Загрузить файл</ButtonStyle>
        <FileName>Загружено: название.zip 15 Мб</FileName>
        <Selector
            labelSelector={'Трек проекта'}
            options={[
                'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
            ]}
        />
        <Selector
            labelSelector={'Категория проекта'}
            options={[
                'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
            ]}
        />
        <Selector
            labelSelector={'Тема проекта'}
            options={[
                'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
            ]}
        />
        <Selector
            labelSelector={'Команда разработки'}
            options={[
                'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
            ]}
        />
      </SidebarForEditingStyle>
  )
}

export default SidebarForEditing