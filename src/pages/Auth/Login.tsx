import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PasswordInput} from "../../components/ui/PasswordInput";


const Login = () => {

  return (
      <AuthWrapper>
        <AuthTitle>Вход</AuthTitle>
        <AuthLabel>
          <AuthInput type={'email'} placeholder={'Почта от ЛК УрФУ'}/>
        </AuthLabel>
        <AuthLabel>
          <PasswordInput placeholder={'Пароль'}/>
          <SubInput to='/'>Забыли пароль?</SubInput>
        </AuthLabel>
          <AuthBtn to={'/'}>
            Войти
          </AuthBtn>
        <AuthSubBtn to='/auth/register'>Регистрация</AuthSubBtn>
      </AuthWrapper>
  )
}

export default Login

export const AuthWrapper = styled.div`
  width: 400px;
`

export const AuthTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 26px;
  padding: 0 20px;
`

export const AuthLabel = styled.label`
  position: relative;
  display: block;
  margin-bottom: 25px;
`

export const AuthBottom = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`

export const AuthInput = styled.input`
  display: block;
  flex: 1;
  width: 100%;
  height: 54px;
  padding: 0 20px;

  font-weight: 300;
  font-size: 16px;

  color: var(--white-color);
  background-color: var(--rgba-grey-color);
  border: 1px solid var(--light-grey-color);
  border-radius: 4px;

  &::placeholder {
    color: var(--rgba-white-color);
  }
`

export const SubInput = styled(Link)`
  cursor: pointer;
  padding: 9px 5px;
  font-weight: 300;
  font-size: 16px;
  color: var(--grey-rgba-color);
`

export const AuthBtn = styled(Link)`
  width: 100%;
  background-color: var(--blue-bg);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  height: 56px;
  margin: 35px 0 17px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--blue-light-bg);
  }

  &:active {
    background-color: var(--blue-dark-bg);
  }
`


export const AuthSubBtn = styled(Link)`
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: var(--blue-bg);
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: var(--white-color);
  }
`