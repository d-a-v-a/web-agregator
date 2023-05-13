import React from "react";
import styled from "styled-components";
import checkboxImg from "../Aside/images/galka.svg";

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 9px;
  font-size: 18px;
  
  label {
    cursor: pointer;
    display: flex;
  }
  
  input {
    opacity: 0;
    position: absolute;
  }
  
  label::before{
    content: "";
    margin-right: 9px;
    border: 2px solid #99A2AD;
    width: 18px;
    height: 18px;
    border-radius: 7px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  input:checked {
    &+label::before{
      content: "";
      background-image: url(${checkboxImg});
      background-position: center;
      background-position-x: 4px;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      
      background-color: #D9D9D9;
      border-color:#2D2D2D ;
    }
  }
`

type Props = { labelTxt: string, id: string }

const Checkbox = ({ labelTxt = "", id = "ch" }: Props) => {
  return (
      <CheckBoxContainer>
        <input type={"checkbox"} id={id}/>
        <label htmlFor={id}>{labelTxt}</label>
      </CheckBoxContainer>
  )
}

export default Checkbox