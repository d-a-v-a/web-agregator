import React from "react";
import "./Auth.css"
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import {AuthWrapper, AuthLabel, AuthBottom, AuthTitle, AuthLink, AuthSpan} from "./Login";

function Register() {
  return (
      <AuthWrapper>
        <AuthTitle>Регистрация</AuthTitle>
          <AuthLabel>
            <AuthSpan>Email или номер телефона:</AuthSpan>
            <Input/>
          </AuthLabel>
          <AuthLabel>
            <AuthSpan>Пароль:</AuthSpan>
            <Input type='password'/>
          </AuthLabel>
          <AuthLabel>
            <AuthSpan>Повторите пароль:</AuthSpan>
            <Input type='password'/>
          </AuthLabel>
          <Button>Регистрация</Button>
        <AuthBottom>
          <AuthLink to='/login'>Есть аккаунт? Вход.</AuthLink>
        </AuthBottom>
      </AuthWrapper>
  )
}

export default Register