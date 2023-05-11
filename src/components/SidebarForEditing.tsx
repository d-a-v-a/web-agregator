import React, {useState} from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import Selector from "./ui/Selector";
import {Link} from "react-router-dom";
import icon from "../assets/images/galkaProjectEditingSidebar.svg"

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

const DownloadBtn = styled(Link)`
  width: 100%;
  background-color: var(--blue-bg);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  height: 56px;
  margin: 35px 0 17px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--blue-light-bg);
  }

  &:active {
    background-color: var(--blue-dark-bg);
  }
`

const PComands = styled.div`
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(208, 230, 238, 0.94);
`

const Block = styled.div`
  margin-bottom: 10px;
`

const WrapperNameInput = styled.div`
  margin-bottom: 15px;
  padding: 10px 15px;
  display: flex;
  background-color: var(--dark-grey-color);
  
`

const NameInputStyle = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 39px;
  background: rgba(200, 200, 200, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: rgba(255, 255, 255, 0.65);
  
  &:focus {
    outline: none;
  }
`

const Icon = styled.img`
  margin-left: 15px;
  cursor: pointer;
`

function LinkInput() {
  return(
      <Block>
        <WrapperNameInput>
          <NameInputStyle type='text' placeholder='Введите Ссылку'/>
          <Icon src={icon}/>
        </WrapperNameInput>
      </Block>
  )
}

function SidebarForEditing() {
  return(
      <SidebarForEditingStyle>
        <H2Style style={{marginBottom: '8px'}}>Статус проекта</H2Style>
        <PublicationNotice>Проект опубликован</PublicationNotice>
        <DownloadBtn to={'/'}>Загрузить файл</DownloadBtn>
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
            margin={'8px'}
            labelSelector={'Команда разработки'}
            options={[
                'Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5',
                'Пункт 6', 'Пункт 7', 'Пункт 8', 'Пункт 9'
            ]}
        />
        <PComands>Профиль команды</PComands>
        <H2Style>Ссылка на репозиторий</H2Style>
        <LinkInput/>

        <PComands>Очистить поле</PComands>


      </SidebarForEditingStyle>
  )
}

export default SidebarForEditing