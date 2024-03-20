import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import {H2Style} from "../../pages/ProjectEditing/ProjectEditing";
import Select from "../Select";

const SelectorStyle = styled.div`
    margin-bottom: 3rem;
`

const SelectBox = styled.div`
    padding: 1.1rem 1.8rem;
    background: var(--dark-grey-color);
`

interface Props {
    value: string;
    setState: Dispatch<SetStateAction<string>>;
    labelSelector: string;
    options: any;
    margin?: string;
    width?: string;
    fontSize?: string;
    type?: TypeSelector;
    headColor?: string;
}

export type TypeSelector = 'none' | 'role'

function Selector({fontSize, headColor, value, setState, labelSelector = '', options, margin = '3rem', width = '100%', type = 'none'}: Props) {

    return (
        <SelectorStyle style={{
            marginBottom: margin,
            width: width,
        }}>
            <H2Style>{labelSelector}</H2Style>
            <SelectBox>
                <Select headColor={headColor} fontSize={fontSize} value={value} setState={setState} height={'3.7rem'} options={options} type={type}/>
            </SelectBox>
        </SelectorStyle>
    )
}

export default Selector