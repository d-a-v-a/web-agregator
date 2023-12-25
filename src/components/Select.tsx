import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import dropdownOutline from "../assets/images/icons/arrows/dropdown_outline.svg";
import {TypeSelector} from "./ui/Selector";
import {useData} from "../context/DataContext";
import {H2Style} from "../pages/ProjectEditing/ProjectEditing";

export interface IProps {
    value: string;
    setState: Dispatch<SetStateAction<string>>;
    options: string[];
    height?: string;
    fontSize?: string;
    type?: TypeSelector;
    selectVoting?: boolean;
    headColor?: string;
}

function Select({value, setState, options, headColor = '#fff', height, fontSize = '12px', type, selectVoting = false}: IProps) {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>();
    const hideClickHandler = () => {
        setIsOpen(prevState => !prevState)
    }

    const {setValues} = useData();

    const activeValueHandler = ({target}: any) => {
        setState(target.textContent);
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
                        <span>{value ? value : 'Выберите из списка'}</span>
                    </HeadVotingStyle>
                    {
                        isOpen && (
                            <BodyWrapVotingStyle>
                                <BodyVotingStyle>
                                    {options.map((item: string, i: number) =>
                                        <ItemVotingStyle key={i}
                                                         curValue={item} activeValue={value}
                                                         onClick={activeValueHandler}>{item}</ItemVotingStyle>)
                                    }
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
                <span style={{ fontSize: fontSize, color: headColor }}>{value ? value : 'Выберите из списка'}</span>
            </HeadStyle>
            {
                isOpen && (
                    <BodyStyle>
                        {options.map((item: string, i: number) =>
                            <ItemStyle fontSize={fontSize} key={i} onClick={activeValueHandler}>{item}</ItemStyle>)
                        }
                    </BodyStyle>
                )
            }

        </SelectStyle>
    )
}

export default Select

const SelectWrapVotingStyle = styled.div`
  margin-bottom: 3rem;
`

const SelectStyle = styled.div<{ ref: any }>`
  position: relative;
  min-width: 16.6rem;
`

const HeadVotingStyle = styled.div<{ height? : string}>`
  cursor: pointer;
  justify-content: space-between;
  gap: 1rem;

  font-weight: 500;
  font-size: 1.2rem;

  color: var(--light-grey-color);

  min-width: 26.1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 6rem;
  background-color: var(--dark-grey-color);

  ${({height}) => height && `
        height: ${height};
    `}
  
  span {
    flex: 1 1 0;
    padding-left: 1rem;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--rgba-grey-color);
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
    display: flex;
    align-items: center;
    color: var(--paragraph-color);
  }
  
  &::after {
    content: '';
    flex: 0 0 2.7rem;
    height: 100%;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const HeadStyle = styled.div<{ height?: string }>`
  cursor: pointer;
  padding: 0.5rem 1.5rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-weight: 500;
  font-size: 1.2rem;

  color: var(--light-grey-color);

  border-radius: 0.3rem;
  border: 0.1rem solid var(--light-grey-color);

  ${({height}) => height && `
        height: ${height};
    `}
  &::after {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const BodyStyle = styled.div`
  position: absolute;
  padding: 0.8rem 0;
  top: 120%;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--dark-grey-color);
  max-height: 18rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.3);
  }
`

const ItemStyle = styled.div<{fontSize: string}>`
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--rgba-white-color);
    font-size: ${(p) => p.fontSize ? p.fontSize : '12px'};

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
  padding: 0.5rem 0.8rem 0.5rem 0;
  top: 120%;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: var(--dark-grey-color);
`

const BodyVotingStyle = styled.div`
  padding: 0.5rem 1.5rem;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(153, 162, 173, 0.45);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0.5rem rgba(153, 162, 173, 1);
  }

  max-height: 15.7rem;
  overflow-y: auto;
`

const ItemVotingStyle = styled.div<{activeValue: string, curValue: string}>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => p.activeValue == p.curValue ? '#C1D9E2' : 'rgba(255, 255, 255, 0.65)'};

  font-size: 1.6rem;
  font-weight: 300;
  border-radius: 0.4rem;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${(p) => p.activeValue == p.curValue ? '' : 'rgba(200, 200, 200, 0.10)'};;
  }
`