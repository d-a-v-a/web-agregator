import React from "react";
import styled from "styled-components";
import SidebarForEditing from "../../components/SidebarForEditing";
import DescriptionProject from "../../components/DescriptionProject";
import PromoMaterials from "../../components/PromoMaterials";


function ProjectEditing() {
  return (
      <ProjectEditingStyle>
        <H1Style>Редактирование проекта</H1Style>
        <PathName><span style={{color: '#B6B6B6'}}>Профиль &gt; </span>Мои проекты</PathName>
        <MainPart>
          <SidebarForEditing/>
          <DescriptionProject/>
        </MainPart>
        <PromoMaterials/>
        <Buttons>
          <SaveButton>Сохранить</SaveButton>
          <PublicButton>Опубликовать</PublicButton>
        </Buttons>
        <P>Проект будет опубликован после одобрения модератором</P>
      </ProjectEditingStyle>
  )
}

const ProjectEditingStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1144px;
`

export const H1Style = styled.h1`
  margin: 0 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: var(--white-color);
`

export const PathName = styled.div`
  margin-bottom: 66px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #D0E6EE;
`

export const H2Style = styled.h2`
  margin: 0 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: var(--white-color);
`

const MainPart = styled.div`
  display: flex;
  gap: 120px;
`

const Buttons = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`

const SaveButton = styled.button`
  width: 356px;
  margin-right: 24px;
  background-color: var(--blue-bg);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  height: 56px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--blue-light-bg);
  }

  &:active {
    background-color: var(--blue-dark-bg);
  }
`

const PublicButton = styled(SaveButton)`
  margin-right: 0;
  background-color: #282828;
  border-image: linear-gradient(#58E1FF 0%, #3431CE 100%);
  border: 1px;
`

const P = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(208, 230, 238, 0.94);
`


export default ProjectEditing