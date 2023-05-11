import React, {useState} from "react";
import styled from "styled-components";
import dropdownOutline from "../assets/images/dropdown_outline.svg";

export interface Props {
    value?: string;
    options: any;
}
function Select({value, options}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeValue, setActiveValue] = useState(value)
    const hideClickHandler = () => {
        setIsOpen(prevState => !prevState)
    }

    const activeValueHandler = ({target}: any) => {
        setActiveValue(target.textContent)
        setIsOpen(false)
    }

    return (
        <SelectStyle>
            <HeadStyle onClick={hideClickHandler}>
                <span>{activeValue ? activeValue : 'Выберите из списка'}</span>
            </HeadStyle>
            {
                isOpen
                    ?
                    <BodyStyle>
                        {options.map((item: string, i: number) => <ItemStyle key={i} onClick={activeValueHandler}>{item}</ItemStyle>)}
                    </BodyStyle>
                    :
                    false
            }

        </SelectStyle>
    )
}
export default Select

const SelectStyle = styled.div`
  position: relative;
  min-width: 166px;
`
const HeadStyle = styled.div`
    cursor: pointer;
    padding: 5px 15px 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    font-weight: 500;
    font-size: 12px;

    color: var(--light-grey-color);

    border-radius: 3px;
    border: 1px solid var(--light-grey-color);
  
  &::after {
    content: '';
    width: 16px;
    height: 16px;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const BodyStyle = styled.div`
    position: absolute;
    padding: 8px 0;
    top: 120%;
    left: 0;
    z-index: 10;
    width: 100%;
    background-color: var(--dark-grey-color);
    max-height: 180px;
    overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
`

const ItemStyle = styled.div`
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--rgba-white-color);

    &::after {
        content: '';
        width: 16px;
        height: 16px;
        background: url(${dropdownOutline}) center/contain no-repeat;
        transform: rotate(180deg);
    }
    
  &:hover {
    background-color: var(--black-bg);
  }
`