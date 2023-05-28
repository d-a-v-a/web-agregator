import React from 'react';
import {ProfileFormStyle} from "./Information";
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import {SubTitleProfile} from "../ProfileLayout";

const MyProjects = () => {
  return (
      <ProfileFormStyle>
        <ChoiceProject>
            <H2Style style={{marginBottom: '8px'}}>Выбор проекта</H2Style>
            <SubTitleProfile style={{marginBottom: '30px'}}>Выберите учебный семестр</SubTitleProfile>
            <ChoiceGrid>
                <ChoiceBtn active>Осень 2022</ChoiceBtn>
                <ChoiceBtn>Осень 2022</ChoiceBtn>
                <ChoiceBtn disabled>Осень 2022</ChoiceBtn>
                <ChoiceBtn disabled>Осень 2022</ChoiceBtn>
            </ChoiceGrid>
        </ChoiceProject>
      </ProfileFormStyle>
  )
}

export default MyProjects

const ChoiceProject = styled.div`

`

const ChoiceGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const ChoiceBtn = styled.button<{active?: boolean}>`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;

  background: var(--black-bg);
  border: 1px solid var(--blue-bg);
  border-radius: 3px;

  font-weight: 500;
  font-size: 16px;
  color: var(--title-blue-grey);

  ${({active}) => active && `
      background: var(--blue-bg);
      color: var(--white-color);
  `}
  
  &:disabled {
    cursor: auto;
    border-color: var(--title-blue-grey);
    opacity: 0.5;
  }
`
