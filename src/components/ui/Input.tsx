import React from "react";
import styled from "styled-components";

interface InputProps {
  height?: string,
  width?: string,
  padding?: string,
}

const InputStyle = styled.input<InputProps>`
  display: block;
  flex: 1;
  height: ${({height = '39px'}) => height};
  padding: ${({padding = '0 10px'}) => padding};
  width: ${({width = '100%'}) => width};

  font-weight: 300;
  font-size: 16px;

  color: var(--white-color);
  background-color: var(--rgba-grey-color);
  border-radius: 4px;

  &::placeholder {
    color: var(--rgba-white-color);
  }
`

export interface Props {
  type?: string,
  placeholder?: string,
  height?: string,
  width?: string,
  padding?: string,
}

const Input = ({type = 'text', placeholder = ''}: Props) => {
  return (
      <InputStyle type={type} placeholder={placeholder}/>
  )
}

export default Input