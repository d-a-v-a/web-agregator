import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/icons/arrows/arrow_left.svg"

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  color: var(--light-grey-color);
`

export const PaginationButtonStyle = styled.button`
  transition: opacity 0.3s ease-in-out;
  &:disabled {
    opacity: 0.45 !important;
  }
  &:hover {
    opacity: 0.8;
  }
`

export const PaginationButtonRight = styled(PaginationButtonStyle)`
  
`

export const PaginationButtonLeft = styled(PaginationButtonStyle)`
  transform: rotate(180deg);
`

export const PaginationText = styled.div`
  padding: 0 1rem;
  font-size: 1.2rem;
  color: var(--light-grey-color);
`

export interface Props {
    current: number;
    total: number;
}

const Pagination = ({ current = 1, total }: Props) => {
    return (
        <PaginationStyle>
            <PaginationButtonLeft disabled={current === 1} type='button'>
                <img src={arrow} alt=""/>
            </PaginationButtonLeft>
            <PaginationText>{current} из {total}</PaginationText>
            <PaginationButtonRight disabled={current === total} type='button'>
                <img src={arrow} alt=""/>
            </PaginationButtonRight>
        </PaginationStyle>
    )
}

export default Pagination