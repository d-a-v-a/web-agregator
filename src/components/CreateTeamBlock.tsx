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
    const id = names.at(-1) ? names.at(-1)!.id + 1 : 1
    setNames([...names, {id: id, name: `Компонент ${id}`}])
    setCountComponent(countComponent + 1)
  }
  const deleteElement = ({id}: { id: number }) => {
    if (names.find(name => name.id === id)) {
      setNames(names.filter(name => name.id !== id).map(name => {
        if (name.id > id) {
          name.id -= 1
        }
        return name
      }));

    }
  }


  const Components = ({names}: { names: Name[] }) => {

    return (
        <ul>{names.map(name => <Component key={name.id}>Номер {name.id} {name.name} <ButtonDelete
            onClick={() => deleteElement({id: name.id})}>Удалить</ButtonDelete></Component>)}</ul>
    )
  }


  return (
      <>
        <TitleInput required={true}>Название команды</TitleInput>
        <InputProfile placeholder={'Введите название команды'} maxLength={20} counter={true}/>
        <TitleInput>Участник команды #1</TitleInput>
        <InputBox>
          <ProfileInput disabled={true} readOnly={true} value={'avarts360@urfu.me'}/>
        </InputBox>
        <Components names={names}/>
        <AddComponent addComponent={addComponent}/>

      </>
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