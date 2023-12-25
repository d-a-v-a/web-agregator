import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {InputBox, ProfileInput, TitleInput} from "../pages/Profile/components/Information";
import InputProfile from "./ui/InputProfile";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Context} from "../pages/Profile/Context";
import {useData} from "../context/DataContext";


const schema = yup.object({
  TeamName: yup.string()
      .required('Обязательное поле'),
}).required();

type FormData = yup.InferType<typeof schema>;

type Name = {
  id: number,
  name: string
}

const CreateTeamBlock = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isDirty, isValid}
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      TeamName: '',
    },
    resolver: yupResolver(schema)
  });

  // @ts-ignore
  const {setStatus, setButtonState} = useContext(Context)


  const { data } = useData()

  const onSubmit = (formData: FormData) => {
    setStatus(['Изменения сохранены', '#47FFA7']);
    data.checkProject = true;
  }

  useEffect(() => {
    setButtonState((prevState: any) => ({
      handleSubmit: handleSubmit,
      onSubmit: onSubmit,
      isDirty: true,
      isValid: true,
    }))
  }, [isDirty, isValid]);

  const [countComponent, setCountComponent] = useState<number>(3)
  const [names, setNames] = useState<Name[]>([{id: 2, name: 'Компонент 1'}, {id: 3, name: 'Компонент 2'}])
  const addComponent = () => {
    if (countComponent < 7) {
      const id = names.at(-1) ? names.at(-1)!.id + 1 : 1
      setNames([...names, {id: id, name: `Компонент ${id}`}])
      setCountComponent(countComponent + 1)
    }
  }
  const deleteElement = ({id}: { id: number }) => {
    if (names.find(name => name.id === id)) {
      setNames(names.filter(name => name.id !== id).map(name => {
        if (name.id > id) {
          name.id -= 1
        }
        return name
      }));
      setCountComponent(countComponent - 1)
    }
  }


  const Components = ({names}: { names: Name[] }) => {

    return (
        <ul>
          {names.map(name => <Component key={name.id} number={name.id}>
            {countComponent > 3 ? <ButtonDelete
                onClick={() => deleteElement({id: name.id})}>Удалить
            </ButtonDelete> : <></>}
          </Component>)}
        </ul>
    )
  }


  return (
      <MyPorjectsFormStyle onSubmit={handleSubmit(onSubmit)} noValidate>
        <TitleInput required={true}>Название команды</TitleInput>
        <InputProfile reg={register('TeamName')} isInvalid={!!errors.TeamName} placeholder={'Введите название команды'}
                      maxLength={20} counter={true}/>
        <TitleInput>Участник команды #1</TitleInput>
        <InputBox>
          <ProfileInput disabled={true} readOnly={true} value={'avarts360@urfu.me'}/>
        </InputBox>
        <WrapperComponent style={{marginBottom: '47px'}}>
          <Role>Роль: Team Lead</Role>
          <Contacts>Контакты</Contacts>
        </WrapperComponent>
        <Components names={names}/>
        <AddComponent addComponent={addComponent} count={countComponent}/>
      </MyPorjectsFormStyle>
  )
}


const Component = ({children, number}: { children: any, number: number }) => {
  return (
      <li style={{marginBottom: '47px'}}>
        <WrapperComponent>
          <TitleInput marginBottom={'25px'}>Участник команды #{number}</TitleInput>
          {children}
        </WrapperComponent>
        <InputBox>
          <ProfileInput placeholder={'Фамилия Имя Отчество'}/>
        </InputBox>
        <WrapperComponent>
          <Role>Роль:</Role>
          <Contacts>Контакты</Contacts>
        </WrapperComponent>
      </li>
  )
}

const AddComponent = ({addComponent, count}: { addComponent: Function, count: number }) => {
  const addElem = () => {
    addComponent()
  }
  return (
      <ButtonAddComponent disabled={count >= 7} onClick={addElem}>Добавить компонент {count}/7</ButtonAddComponent>
  )
}

const MyPorjectsFormStyle = styled.form`

`

const ButtonAddComponent = styled.button`
  width: 356px;
  height: 56px;
  margin-left: auto;

  border-radius: 3px;
  border: 1px solid var(--5-a-9-df-5, #5A9DF5);
  background-color: #282828;
  transition: background-color 0.3s ease-in-out;

  color: var(--headline-2nd-2, #D0E6EE);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background-color: var(--5-a-9-df-5, #5A9DF5);
  }

  &:disabled {
    border: 1px solid var(--d-0-e-6-ee, rgba(208, 230, 238, 0.50));
    background-color: #1C1E22;
    color: #D0E6EE;

    &:hover {
      background-color: #1C1E22;
    }
  }
`


export const Contacts = styled.a`
    color: var(--headline-3-nd, #C1D9E2);
    text-align: right;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-underline-offset: 4px;
    cursor: pointer;

    &:hover, &:active {
        text-decoration-line: none;
    }
`

export const Role = styled.div`
  color: #B6B6B6;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const WrapperComponent = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonDelete = styled.button`

  border: 1px solid var(--ff-8197, #FF8197);
  border-radius: 4px;

  width: 100px;
  height: 26px;

  color: var(--ff-8197, #FF8197);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`


export default CreateTeamBlock