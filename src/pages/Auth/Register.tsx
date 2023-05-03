import React from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {AuthWrapper, AuthLabel, AuthBottom, AuthTitle, AuthLink, AuthSpan} from "./Login";
import {Link} from "react-router-dom";

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
        <Link to='/'>
          <Button>
            Регистрация
          </Button>
        </Link>
        <AuthBottom>
          <AuthLink to='/auth/login'>Есть аккаунт? Вход.</AuthLink>
        </AuthBottom>
      </AuthWrapper>
  )
}

export default Register