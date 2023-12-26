import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import Select from "../../../components/Select";

import {Context} from "../Context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorText} from "../../Auth/Login";
import {Block, WrapperNameInput} from "../../../components/ui/InputAndTextarea";
import {urlPattern} from "../../../regExp";
import {ShowPassword} from "../../Auth/Register/Basic";


const schema = yup.object({
  firstName: yup.string()
      .required('Обязательное поле'),
  lastName: yup.string()
      .required('Обязательное поле'),
  patronymic: yup.string(),
  group: yup.string()
      .required('Обязательное поле'),
  link: yup.string()
      .required('Обязательное поле')
      .matches(urlPattern,'Неверное значение'),
}).required();

type FormData = yup.InferType<typeof schema>;

const Information = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid } } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      group: '',
      link: '',
    },
    resolver: yupResolver(schema)
  });

  const [direction, setDirection] = useState('09.03.01');
  const [course, setCourse] = useState('2');

  const onSubmit = (data: FormData) => {
    setStatus(['Изменения сохранены', '#47FFA7'])
  }

  // @ts-ignore
  const {SetLabel, setStatus, setButtonState} = useContext(Context)


  useEffect(() => {
    SetLabel('Данные пользователя')
  }, []);

  useEffect(() => {
    setButtonState((prevState: any) => ({
      handleSubmit: handleSubmit,
      onSubmit: onSubmit,
      isDirty: isDirty,
      isValid: isValid,
      children: 'Сохранить',
      styles: {
        color: 'white',
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    }))
  }, [isDirty, isValid]);

  return (
      <ProfileFormStyle onSubmit={handleSubmit(onSubmit)} noValidate>
        <LabelBox isInvalid={!!errors.lastName}>
          <TitleInput required={true}>Фамилия</TitleInput>
          <InputBox>
            <ProfileInput
                {...register("lastName")}
                placeholder={'Введите фамилию'}/>
          </InputBox>
          <ErrorText>{errors.lastName?.message}</ErrorText>
        </LabelBox>
        <LabelBox isInvalid={!!errors.firstName}>
          <TitleInput required={true}>Имя</TitleInput>
          <InputBox>
            <ProfileInput
                {...register("firstName")}
                placeholder={'Введите имя'}/>
          </InputBox>
          <ErrorText>{errors.firstName?.message}</ErrorText>
        </LabelBox>
        <LabelBox isInvalid={!!errors.patronymic}>
          <TitleInput>Отчество</TitleInput>
          <InputBox>
            <ProfileInput
                {...register("patronymic")}
                placeholder={'Введите отчество'}/>
          </InputBox>
          <ErrorText>{errors.patronymic?.message}</ErrorText>
        </LabelBox>
        <GridTwoColumns>
          <LabelBox>
            <TitleInput required={true}>Направление обучения</TitleInput>
            <InputBox>
              <Select headColor={'#D0E6EE'} value={direction} setState={setDirection} fontSize={'1.6rem'} height={'3.9rem'} options={['09.03.01', '09.03.03', '09.03.04']}/>
            </InputBox>
          </LabelBox>
          <LabelBox>
            <TitleInput required={true}>Курс</TitleInput>
            <InputBox>
              <Select headColor={'#D0E6EE'} value={course} setState={setCourse} fontSize={'1.6rem'} height={'3.9rem'} options={['2', '3', '4']}/>
            </InputBox>
          </LabelBox>
          <LabelBox isInvalid={!!errors.group}>
            <TitleInput>Академ. группа</TitleInput>
            <InputBox>
              <ProfileInput disabled={true} readOnly={true} value={'РИ-200031'}/>
            </InputBox>
          </LabelBox>
          <LabelBox isInvalid={!!errors.link}>
            <TitleInput
                required={true}>Контакты</TitleInput>
            <InputBox flex>
              <ProfileInput
                  {...register("link")}
                  placeholder={'Ссылка на Telegram или ВК'}/>
              <JackdawStyled error={!!errors.link} width="18" height="14" viewBox="0 0 18 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.7364 1.16399C18.0878 1.51547 18.0878 2.08531 17.7364 2.43679L6.6364 13.5368C6.46761 13.7056 6.2387 13.8004 6 13.8004C5.76131 13.8004 5.53239 13.7056 5.3636 13.5368L0.263604 8.43679C-0.0878682 8.08531 -0.0878678 7.51547 0.263604 7.16399C0.615076 6.81252 1.18492 6.81252 1.5364 7.16399L6 11.6276L16.4636 1.16399C16.8151 0.812523 17.3849 0.812523 17.7364 1.16399Z"
                    fill="#585858"/>
              </JackdawStyled>
            </InputBox>
            <ErrorText>{errors.link?.message}</ErrorText>
          </LabelBox>
        </GridTwoColumns>
      </ProfileFormStyle>
  )
}

export default Information

export const ProfileFormStyle = styled.form`
  flex: 0 1 77.5rem;
`

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.4rem;
  
  @media (max-width: 1100px) {
    display: block;
  }
`

export const TitleInput = styled.div<{required?: boolean, marginBottom?: string}>`
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '2.5rem'};
  font-weight: 500;
  font-size: 2.4rem;
  color: var(--white-color);

  ${({ required }) => required && `
        &::after {
            content: '*';
            color: var(--required-color)
        }
    `}
`

const JackdawStyled = styled.svg<{ validUrl?: boolean, error?: boolean }>`
  path {
    transition: fill 0.3s ease-in-out;
    fill: ${props => props.validUrl ? 'green' : '#585858'};
    ${({error}) => error && `
      fill: var(--red-color);
    `}
  }
`

export const LabelBox = styled.label<{isInvalid?: boolean}>`
  position: relative;
  
  display: block;
  margin-bottom: 5rem;
  
  ${ErrorText} {
    color: var(--red-color);
    left: auto;
    right: 0;
  }

  ${({ isInvalid }) => isInvalid && `
        input {
            border-color: #C86571 !important;
        }
        
        input::placeholder {
            color: #C86571 !important;
        }
        
        p {
            opacity: 1;
            bottom: -2rem;
            transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
        }
    `}
`

export const ProfileInput = styled.input`
  padding: 1rem 2.2rem;
  height: 3.9rem;
  width: 100%;
  background: var(--rgba-grey-color);
  border-radius: 4px;

  font-weight: 300;
  font-size: 1.6rem;
  color: var(--name-title);
  border: 1px solid transparent;
  transition: border-color 0.3s ease-in-out;
  
  &:hover {
    border-color: var(--name-title);
  }
  
  &:focus {
    border-color: var(--name-title);
  }
  
  &::placeholder {
    color: var(--paragraph-color);
  }

  &:disabled {
    background: transparent;

    &:hover {
      border-color: transparent;
    }

    &:focus {
      border-color: transparent;
    }
  }
`

export const InputBox = styled.div<{required?: boolean, flex?: boolean}>`
  padding: 1rem 1.5rem;
  background-color: var(--dark-grey-color);

  ${Block} {
    margin-bottom: 0;
  }

  ${WrapperNameInput} {
    margin-bottom: 0;
  }

  ${ShowPassword} {
    position: static;
  }
  
  ${(props) => props.flex && `
      display: flex;
      align-items: center;
      gap: 1.5rem;
  `}
`

