import React from "react";
import {AuthBtn, AuthTitle, AuthWrapper} from "../Login";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SuccessInfo = () => {
  return (
      <AuthWrapper>
        <AuthTitle>Востановление пароля</AuthTitle>
        <AuthCenterText>
          Вам отправлена ссылка для измения пароля
        </AuthCenterText>
        <Link to={'/auth/recovery/change-password'}>
          <AuthBtn>Продолжить</AuthBtn>
        </Link>
      </AuthWrapper>
  )
}

export default SuccessInfo

export const AuthCenterText = styled.div`
  margin: 5.7rem auto 7.7rem;
  max-width: 30rem;
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;
  color: var(--input-title);
`