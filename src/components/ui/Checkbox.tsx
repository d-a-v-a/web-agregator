import React from "react";
import styled from "styled-components";
import checkboxImg from "../../assets/images/icons/checkboxes/galka.svg";

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: 0.9rem;
  font-size: 1.8rem;
  
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
    margin-right: 0.9rem;
    border: 0.2rem solid #99A2AD;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.7rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  input:checked {
    &+label::before{
      content: "";
      background-image: url(${checkboxImg});
      background-position: center;
      background-position-x: 0.4rem;
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