import React, {useContext, useEffect} from 'react';
import {InputBox, LabelBox, ProfileFormStyle, ProfileInput, TitleInput} from "./Information";
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import {Context} from "../Context";

const Security = () => {
  // @ts-ignore
  const {SetLabel, SetBtn} = useContext(Context)

  useEffect(() => {
    SetLabel('Безопасность')
    SetBtn(false)
  }, []);

  return (
      <ProfileFormStyle>
        <LabelBox>
          <TitleInput>Почта ЛК УрФУ</TitleInput>
          <InputBox>
            <ProfileInput disabled={true} readOnly={true} value={'avarts360@urfu.me'}/>
          </InputBox>
          <DescInput>Недоступно для изменения</DescInput>
        </LabelBox>
        <TitleBox>
          <H2Style>Изменение пароля</H2Style>
          <ProfileParagraph>Обновите свой текущий пароль</ProfileParagraph>
        </TitleBox>
        <LabelBox>
          <TitleInput required={true}>Старый пароль</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Введите пароль'}/>
          </InputBox>
        </LabelBox>
        <LabelBox>
          <TitleInput required={true}>Новый пароль</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Введите новый пароль'}/>
          </InputBox>
        </LabelBox>
        <LabelBox>
          <TitleInput required={true}>Подтвердите пароль</TitleInput>
          <InputBox>
            <ProfileInput placeholder={'Повторите новый пароль'}/>
          </InputBox>
        </LabelBox>
      </ProfileFormStyle>
  )
}

export default Security

const TitleBox = styled.div`
  margin-bottom: 50px;
  
  h2 {
    margin-bottom: 8px !important;
  }
`

const ProfileParagraph = styled.p`
  font-size: 18px;
  color: var(--grey-title);
`

const DescInput = styled.p`
  margin-top: 15px;
  text-align: right;

  font-weight: 400;
  font-size: 18px;
  color: var(--title-blue-grey);
`

