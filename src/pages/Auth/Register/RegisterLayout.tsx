import React from "react";
import {AuthWrapper, AuthBottom, AuthTitle, AuthSubBtn} from "../Login";
import {Outlet} from "react-router-dom";

const RegisterLayout = () => {

  return (
      <AuthWrapper>
        <AuthTitle>Регистрация</AuthTitle>
          <Outlet/>
        <AuthBottom>
          <AuthSubBtn to='/auth/login'>Войти</AuthSubBtn>
        </AuthBottom>
      </AuthWrapper>
  )
}

export default RegisterLayout

