import React from "react";
import {AuthBtn, AuthInput, AuthLabel} from "../Login";
import {PasswordInput} from "../../../components/ui/PasswordInput";
import styled from "styled-components";

const Basic = () => {
    return (
        <>
            <Steps>
                <Step isActive={true}>1</Step>
                <Step isActive={false}>2</Step>
            </Steps>
            <AuthLabel>
                <AuthInput type={'email'} placeholder={'Почта от ЛК УрФУ'}/>
            </AuthLabel>
            <AuthLabel>
                <PasswordInput placeholder={'Пароль'}/>
            </AuthLabel>
            <AuthLabel>
                <PasswordInput placeholder={'Потвердите пароль'} />
            </AuthLabel>
            <AuthBtn to={'contacts'}>
                Далее
            </AuthBtn>
        </>
    )
}

export default Basic

export const Steps = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
`

export const Step = styled.div<{ isActive: boolean}>`
  position: relative;
  font-weight: 700;
  flex: 0 0 30px;
  height: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  font-size: 14px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p=> (p.isActive ? 'var(--blue-bg)' : 'var(--step-grey)')};
  color: var(--white-color);
  
  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 35px;
    width: 20px;
    height: 2px;
    background-color: ${p=> (p.isActive ? 'var(--blue-bg)' : 'var(--step-grey)')};
    transition: background-color 0.3s ease-in-out;
  }
`


