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
  margin: 57px auto 77px;
  max-width: 300px;
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  color: var(--input-title);
`