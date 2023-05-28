import React from "react";
import styled from "styled-components";


export const Block = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const BlockTextArea = styled(Block)`
  width: 736px;
`

export const WrapperNameInput = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 15px;
  background-color: var(--dark-grey-color);
`


export const WrapperTextareaInput = styled(WrapperNameInput)`

`

export const Counter = styled.div`
  display: flex;
  justify-content: flex-end;

  color: var(--grey-title);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`



