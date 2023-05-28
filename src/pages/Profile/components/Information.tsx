import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Select from "../../../components/Select";

import {Context} from "../Context";
import NameProjectInput from "../../../components/ui/InputProfile";


const Information = () => {

  // @ts-ignore
  const {SetLabel, SetBtn} = useContext(Context)

  useEffect(() => {
    SetLabel('Данные пользователя')
    SetBtn(false)
  }, []);

  return (
      <ProfileFormStyle>
        <LabelBox>
          <TitleInput required={true}>Фамилия</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Введите фамилию'}/>
          </InputBox>
        </LabelBox>
        <LabelBox>
          <TitleInput required={true}>Имя</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Введите имя'}/>
          </InputBox>
        </LabelBox>
        <LabelBox>
          <TitleInput>Отчество</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Введите отчество'}/>
          </InputBox>
        </LabelBox>
        <GridTwoColumns>
          <LabelBox>
            <TitleInput required={true}>Направление обучения</TitleInput>
            <InputBox>
              <Select height={'37px'} options={['09.03.01', '09.03.03', '09.03.04']}/>
            </InputBox>
          </LabelBox>
          <LabelBox>
            <TitleInput required={true}>Курс</TitleInput>
            <InputBox>
              <Select height={'37px'} options={['2', '3', '4']}/>
            </InputBox>
          </LabelBox>
          <LabelBox>
            <TitleInput required={true}>Академ. группа</TitleInput>
            <InputBox>
              <ProfileInput placeholder={'Введите группу'}/>
            </InputBox>
          </LabelBox>
          <LabelBox>
            <TitleInput required={true}>Контакты</TitleInput>
            <NameProjectInput jackdaw={true} cleaner={false} placeholder={'Ссылка на Telegram или ВК'}/>
          </LabelBox>
        </GridTwoColumns>
      </ProfileFormStyle>
  )
}

export default Information

export const ProfileFormStyle = styled.div`
  flex: 1 1;
`

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`

export const TitleInput = styled.div<{required?: boolean}>`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 24px;
  color: var(--white-color);

  ${({ required }) => required && `
        &::after {
            content: '*';
            color: var(--required-color)
        }
    `}
`

export const LabelBox = styled.label`
  display: block;
  margin-bottom: 50px;
`

export const ProfileInput = styled.input`
  padding: 10px 22px;
  height: 39px;
  width: 100%;
  background: var(--rgba-grey-color);
  border-radius: 4px;

  font-weight: 300;
  font-size: 16px;
  color: var(--white-color);
  
  &::placeholder {
    color: var(--paragraph-color);
  }

  &:disabled {
    background: transparent;
  }
`

export const InputBox = styled.div<{required?: boolean}>`
  padding: 10px 15px;
  background-color: var(--dark-grey-color);
`