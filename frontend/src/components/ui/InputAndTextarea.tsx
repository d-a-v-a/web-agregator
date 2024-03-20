import styled from "styled-components";


export const Block = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

export const BlockTextArea = styled(Block)`
  width: 100%;
`

export const WrapperNameInput = styled.div<{isInvalid?: boolean}>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  background-color: var(--dark-grey-color);
  
  ${({ isInvalid }) => isInvalid && `
        input {
            border-color: #C86571 !important;
        }
        
        input::placeholder {
            color: #C86571 !important;
        }
    `}
`


export const WrapperTextareaInput = styled(WrapperNameInput)`

`

export const Counter = styled.div`
  display: flex;
  justify-content: flex-end;

  color: var(--grey-title);
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
`



