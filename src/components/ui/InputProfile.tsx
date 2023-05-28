import React, {useState} from "react";
import {Block, Counter, WrapperNameInput} from "./InputAndTextarea";
import styled from "styled-components";
import jackdawImg from "../../assets/images/jackdow.svg"
import passwordImg from "../../assets/images/notEye.svg"

interface Props {
  placeholder?: string,
  maxLength?: number,
  counter?: boolean,
  jackdaw?: boolean,
  password?: boolean,
  iconSize?: number,
  cleaner?: boolean,
}


function NameProjectInput({
                            placeholder = '',
                            maxLength = 20,
                            counter = false,
                            jackdaw = false,
                            password = false,
                            iconSize = 24,
                            cleaner = false,

                          }: Props) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };
  const type: 'password' | 'text' = password ? 'password' : 'text'

  function cleanInput() {
    setInputValue('')
  }


  return (
      <Block>
        <WrapperNameInput>
          <NameInputStyle type={type} maxLength={maxLength} value={inputValue} onChange={handleInputChange}
                          placeholder={placeholder}/>
          {jackdaw ? (<Icon size={iconSize} img={jackdawImg}/>) : (<></>)}
          {password ? (<Icon size={iconSize} img={passwordImg}/>) : (<></>)}
        </WrapperNameInput>
        {counter ? (<Counter>{inputValue.length}/{maxLength}</Counter>) : (<></>)}
        {cleaner ? (<CleanEl onClick={cleanInput}>Очистить поле</CleanEl>) : (<></>)}
      </Block>
  )
}


const CleanEl = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(208, 230, 238, 0.94);
  cursor: pointer;
`

interface IconProps {
  size: number,
  img: any,
}

const Icon = styled.div<IconProps>`
  width: ${props => props.size.toString() + 'px'};
  height: ${props => props.size.toString() + 'px'};
  background-image: url("${props => props.img}");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
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

export default NameProjectInput
