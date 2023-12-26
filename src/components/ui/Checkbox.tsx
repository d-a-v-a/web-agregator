import React from "react";
import styled from "styled-components";
import checkboxImg from "../../assets/images/icons/checkboxes/galka.svg";

const LabelContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
    margin-left: 0.9rem;
    gap: 0.9rem;
    font-size: 1.8rem;
    cursor: pointer;

    input {
        display: none;
    }

    input:checked + div {
        background-image: url(${checkboxImg});
        background-position: center;
        background-position-x: 0.4rem;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #D9D9D9;
        border-color: #2D2D2D;
    }
`

const CheckBoxIcon = styled.div`
    border: 0.2rem solid #99A2AD;
    flex: 0 0 2.2rem;
    height: 2.2rem;
    border-radius: 0.7rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
`

const LabelText = styled.div`
    color: #C1D9E2;
    font-size: 18px;
    font-weight: 400;
`

type Props = { labelTxt: string }

const Checkbox = ({labelTxt = ""}: Props) => {
    return (
        <LabelContainer>
            <input type={"checkbox"}/>
            <CheckBoxIcon/>
            <LabelText>{labelTxt}</LabelText>
        </LabelContainer>
    )
}

export default Checkbox