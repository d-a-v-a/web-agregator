import React from "react";
import styled from "styled-components";
import SidebarForEditing from "../../components/SidebarForEditing";
import DescriptionProject from "../../components/DescriptionProject";


const ProjectEditingStyle = styled.div`
  margin: 0 auto 74px;
  max-width: 1144px;
`

const H1Style = styled.h1`
  margin: 0 0 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: var(--white-color);
`

const PathName = styled.div`
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

function ProjectEditing() {
  return (
      <ProjectEditingStyle>
        <H1Style>Редактирование проекта</H1Style>
        <PathName><span style={{color: '#B6B6B6'}}>Профиль &gt; </span>Мои проекты</PathName>

        <MainPart>
          <SidebarForEditing/>
          <DescriptionProject/>
        </MainPart>
      </ProjectEditingStyle>
  )
}


export default ProjectEditing