import React, {useState} from "react";
import styled from "styled-components";
import {InputBox, ProfileInput, TitleInput} from "../pages/Profile/components/Information";
import InputProfile from "./ui/InputProfile";

type Name = {
  id: number,
  name: string
}

const CreateTeamBlock = () => {
  const [countComponent, setCountComponent] = useState<number>(3)
  const [names, setNames] = useState<Name[]>([{id: 1, name: 'Компонент 1'}, {id: 2, name: 'Компонент 2'}, {
    id: 3,
    name: 'Компонент 3'
  },])
  const addComponent = () => {
    if (names.at(-1)) {
      const id = names.at(-1)!.id + 1
      setNames([...names, {id: id, name: `Компонент ${id}`}])
      setCountComponent(countComponent + 1)
    }
  }
  const deleteElement = ({id}: { id: number }) => {
    console.log(id)
    if (names.find(name => name.id === id)) {
      const arr = names
      arr.slice(id - arr[0].id, 1)
      console.log('грибочки')
      for (let i = id - arr[0].id; i < countComponent; i++) {
        if (arr[i].id > id) {
          arr[i].id += 1
        }
      }
      setNames(arr)
    }
  }
  return (
      <>
        <TitleInput required={true}>Название команды</TitleInput>
        <InputProfile placeholder={'Введите название команды'} maxLength={20} counter={true}/>
        <TitleInput>Участник команды #1</TitleInput>
        <InputBox>
          <ProfileInput disabled={true} readOnly={true} value={'avarts360@urfu.me'}/>
        </InputBox>
        <Components deleteElement={deleteElement} names={names}/>
        <AddComponent addComponent={addComponent}/>

      </>
  )
}

const Components = ({names, deleteElement}: { names: Name[], deleteElement: Function }) => {

  return (
      <ul>{names.map(name => <Component key={name.id}>{name.name} <ButtonDelete
          onClick={() => deleteElement(name.id)}>Удалить</ButtonDelete></Component>)}</ul>
  )
}

const Component = ({children}: { children: any }) => {
  return (
      <li>{children}</li>
  )
}

const AddComponent = ({addComponent}: { addComponent: Function }) => {
  const addElem = () => {
    addComponent()
  }
  return (
      <button onClick={addElem}>Добавить компонент</button>
  )
}

const ButtonDelete = styled.button`
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid red
`


export default CreateTeamBlock