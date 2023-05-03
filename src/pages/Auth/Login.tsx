import React from "react";
import styled from "styled-components";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {Link} from "react-router-dom";

export const AuthWrapper = styled.div`
  width: 400px;
  margin: 0 auto 80px;
  
  & button {
    width: 100%;
    margin: 40px auto 20px;
    font-size: 14px;
    height: 40px;
  }
`

export const AuthTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  padding: 0 20px;
`

export const AuthLabel = styled.label`
  display: block;
  margin-bottom: 20px;
`

export const AuthBottom = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`

export const AuthLink = styled(Link)`
  display: inline-block;
  transition: background-image 0.3s ease-in-out;
  
  &:hover {
    background: linear-gradient(180deg, #58E1FF 0%, #3431CE 205.26%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const AuthSpan = styled.span`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`


function Login() {
  return (
      <AuthWrapper>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthLabel>
          <AuthSpan>Email:</AuthSpan>
          <Input width={'(100% - 20px)'} type={'email'}/>
        </AuthLabel>
        <AuthLabel>
          <AuthSpan>Пароль:</AuthSpan>
          <Input width={'100%'} type={'password'}/>
        </AuthLabel>
        <Link to='/'>
          <Button>
            Войти
          </Button>
        </Link>
        <AuthBottom>
          <AuthLink to='/auth/register'>Создать аккаунт</AuthLink>
        </AuthBottom>
      </AuthWrapper>
  )
}

export default Login