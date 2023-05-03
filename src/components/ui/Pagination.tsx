import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow_left.svg"

const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  color: var(--light-grey-color);
`

const PaginationButtonStyle = styled.button`
  transition: opacity 0.3s ease-in-out;
  &:disabled {
    opacity: 0.45 !important;
  }
  &:hover {
    opacity: 0.8;
  }
`

const PaginationButtonRight = styled(PaginationButtonStyle)`
  
`

const PaginationButtonLeft = styled(PaginationButtonStyle)`
  transform: rotate(180deg);
`

const PaginationText = styled.div`
  padding: 0 10px;
  font-size: 12px;
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