import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonStyle = styled(Link)`
  padding: 1px;
  width: 7.6rem;
  height: 2.6rem;
  font-weight: 500;
  font-size: 1rem;

  color: var(--btn-color-normal);
  border-radius: 3px;
  background: linear-gradient(180deg, #60FB9E 0%, #1EFE77 0.01%, #0D9834 100%);
  
  &:hover {
    color: var(--btn-color-hover);
  }
  
  &:hover .wrapper {
    background-color: transparent;
  }

  &:active .wrapper {
    background: linear-gradient(0deg, rgba(15, 15, 15, 0.2), rgba(15, 15, 15, 0.2))
  }

  &:disabled {
    color: var(--btn-color-disabled);
    background: #282828;
  }
`

const Wrapper = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black-bg);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  transition: background-color 0.3s ease-in-out;
`

export interface IButtonProps {
    color?: string;
    to?: string;
    children?: React.ReactNode;
}
const Button: React.FC<IButtonProps> =
    ({
        children, to = '', color = 'transparent'
    }) => {
        return (
            <ButtonStyle to={to}>
                <Wrapper color={color} className='wrapper'>
                    {children}
                </Wrapper>
            </ButtonStyle>
        );
    };

export default Button;