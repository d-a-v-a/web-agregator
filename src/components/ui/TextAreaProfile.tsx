import React, {useState} from "react";
import styled from "styled-components";
import {BlockTextArea, Counter, WrapperTextareaInput} from "./InputAndTextarea";

function NameProjectTextArea({placeholder}: { placeholder: string }) {
  const [inputValue, setInputValue] = useState('');
  const [height, setHeight] = useState('');
  const handleInputChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value);
    if (event.currentTarget.value === "") {
      setHeight('6rem');
    }
  };

  function handleKeyUp(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
    setInputValue(event.currentTarget.value);

  }

  return (
      <BlockTextArea>
        <WrapperTextareaInput>
          <TextAreaStyle style={{height}} maxLength={1000} value={inputValue} onInput={handleInputChange}
                         onKeyUp={handleKeyUp} placeholder={placeholder}/>
        </WrapperTextareaInput>
        <Counter>{inputValue.length}/1000</Counter>
      </BlockTextArea>
  )
}


const TextAreaStyle = styled.textarea`
  overflow: hidden;
  outline: none;
  resize: none;
  border: none;
  border-radius: 4px;


  padding: 2rem 2.2rem;
  width: 100%;
  min-height: 100%;

  background: rgba(200, 200, 200, 0.1);
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: rgba(255, 255, 255, 0.65);

  &:focus {
    outline: none;
  }
`

export default NameProjectTextArea