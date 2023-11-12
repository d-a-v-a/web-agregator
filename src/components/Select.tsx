import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import dropdownOutline from "../assets/images/icons/arrows/dropdown_outline.svg";
import {TypeSelector} from "./ui/Selector";
import {useData} from "../context/DataContext";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";

export interface Props {
    value?: string;
    options: any;
    height?: string;
    type?: TypeSelector;
    selectVoting?: boolean;
}

function Select({value, options, height, type, selectVoting = false}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>();
    const [activeValue, setActiveValue] = useState(value)
    const hideClickHandler = () => {
        setIsOpen(prevState => !prevState)
    }

    const {setValues} = useData();

    const activeValueHandler = ({target}: any) => {
        setActiveValue(target.textContent)
        setIsOpen(false)
        if (type === 'role') {
            setValues({role: target.textContent})
        }
    }

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [isOpen]);

    if (selectVoting) {
        return (
            <SelectWrapVotingStyle>
                <H2Style>Выбор события</H2Style>
                <SelectStyle ref={ref}>
                    <HeadVotingStyle height={height} onClick={hideClickHandler}>
                        <span>{activeValue ? activeValue : 'Выберите из списка'}</span>
                    </HeadVotingStyle>
                    {
                        isOpen && (
                            <BodyWrapVotingStyle>
                                <BodyVotingStyle>
                                    {options.map((item: string, i: number) => <ItemVotingStyle key={i}
                                                                                         onClick={activeValueHandler}>{item}</ItemVotingStyle>)}
                                </BodyVotingStyle>
                            </BodyWrapVotingStyle>
                        )
                    }

                </SelectStyle>
            </SelectWrapVotingStyle>
        )
    }

    return (
        <SelectStyle ref={ref}>
            <HeadStyle height={height} onClick={hideClickHandler}>
                <span>{activeValue ? activeValue : 'Выберите из списка'}</span>
            </HeadStyle>
            {
                isOpen && (
                    <BodyStyle>
                        {options.map((item: string, i: number) => <ItemStyle key={i}
                                                                             onClick={activeValueHandler}>{item}</ItemStyle>)}
                    </BodyStyle>
                )
            }

        </SelectStyle>
    )
}

export default Select

const SelectWrapVotingStyle = styled.div`
  margin-bottom: 30px;
`

const SelectStyle = styled.div<{ ref: any }>`
  position: relative;
  min-width: 166px;
`

const HeadVotingStyle = styled.div<{ height?: string }>`
  cursor: pointer;
  justify-content: space-between;
  gap: 10px;

  font-weight: 500;
  font-size: 12px;

  color: var(--light-grey-color);


  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 15px;
  height: 60px;
  background-color: var(--dark-grey-color);

  ${({height}) => height && `
        height: ${height};
    `}
  
  span {
    flex: 1 1 0%;
    padding-left: 10px;
    height: 40px;
    width: 196px;
    border: none;
    border-radius: 4px;
    background-color: rgb(61, 61, 61);
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.65);
  }
  
  &::after {
    content: '';
    flex: 0 0 27px;
    height: 100%;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const HeadStyle = styled.div<{ height?: string }>`
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

  ${({height}) => height && `
        height: ${height};
    `}
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

const BodyWrapVotingStyle = styled.div`
  position: absolute;
  padding: 5px 8px 5px 0;
  top: 120%;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--dark-grey-color);
`

const BodyVotingStyle = styled.div`
  padding: 5px 15px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(153, 162, 173, 0.45);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px rgba(153, 162, 173, 1);
  }

  max-height: 157px;
  overflow-y: auto;
`

const ItemVotingStyle = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: rgba(255, 255, 255, 0.65);

  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  transition: 0.1s ease-in-out;

  &:hover {
    background: rgba(200, 200, 200, 0.10);
  }
`