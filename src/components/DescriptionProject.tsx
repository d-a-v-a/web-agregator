import React, {useState} from "react";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";
import styled from "styled-components";


const DescriptionProjectStyle = styled.div`
  max-width: 706px;
`
const Block = styled.div`
  width: 736px;
  margin-bottom: 30px;
`

const BlockTextArea = styled(Block)`
  width: 736px;
`

const WrapperNameInput = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 15px;
  background-color: var(--dark-grey-color);
`



const WrapperTextareaInput = styled(WrapperNameInput)`
  
`

const NameInputStyle = styled.input`
  padding-left: 22px;
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

const TextAreaStyle = styled.textarea`
  
  overflow: hidden;
  outline: none;
  resize: none;
  border: none;
  border-radius: 4px;
  
  
  padding: 20px 22px;
  width: 100%;
  min-height: 100%;
  
  background: rgba(200, 200, 200, 0.1);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.65);
  
  &:focus {
    outline: none;
  }
`

const Counter = styled.div`
  display: flex;
  justify-content: flex-end;
  
  color: var(--grey-title);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`

function NameProjectInput() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };
  return(
      <Block>
        <WrapperNameInput>
          <NameInputStyle type='text' maxLength={20} value={inputValue} onChange={handleInputChange} placeholder='Введите название игры'/>
        </WrapperNameInput>
        <Counter>{inputValue.length}/20</Counter>
      </Block>
  )
}

function NameProjectTextArea({placeholder}: {placeholder: string}) {
  const [inputValue, setInputValue] = useState('');
  const [height, setHeight] = useState('');
  const handleInputChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value);
    if (event.currentTarget.value === "") {
      setHeight('60px');
    }
  };

  function handleKeyUp(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
    setInputValue(event.currentTarget.value);

  }

  return(
      <BlockTextArea>
        <WrapperTextareaInput>
          <TextAreaStyle style={{ height }} maxLength={1000} value={inputValue} onInput={handleInputChange} onKeyUp={handleKeyUp} placeholder={placeholder}/>
        </WrapperTextareaInput>
        <Counter>{inputValue.length}/1000</Counter>
      </BlockTextArea>
  )
}


function DescriptionProject() {
  return(
      <DescriptionProjectStyle>
        <H2Style>Название проекта</H2Style>
        <NameProjectInput/>
        <H2Style>Описание проекта</H2Style>
        <NameProjectTextArea placeholder='Описание игры...'/>
        <H2Style>Как играть</H2Style>
        <NameProjectTextArea placeholder='Как...'/>
      </DescriptionProjectStyle>
  )
}

export default DescriptionProject