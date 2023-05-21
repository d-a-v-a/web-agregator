import React from "react";
import {AuthBottom, AuthBtn, AuthInput, AuthLabel, AuthSubBtn, AuthTitle, AuthWrapper} from "./Login";
import {PasswordInput} from "../../components/ui/PasswordInput";


const ChangePassword = () => {
    return (
        <AuthWrapper>
            <AuthTitle>Именить пароль</AuthTitle>
            <AuthLabel>
                <AuthInput type={'email'} placeholder={'Почта от ЛК УрФУ'}/>
            </AuthLabel>
            <AuthLabel>
                <PasswordInput placeholder={'Старый пароль'}/>
            </AuthLabel>
            <AuthLabel>
                <PasswordInput placeholder={'Новый пароль'}/>
            </AuthLabel>
            <AuthLabel>
                <PasswordInput placeholder={'Потвердите пароль'} />
            </AuthLabel>
            <AuthBtn>
                Изменить
            </AuthBtn>
            <AuthBottom>
                <AuthSubBtn to='/auth/login'>Войти</AuthSubBtn>
            </AuthBottom>
        </AuthWrapper>
    )
}

export default ChangePassword
