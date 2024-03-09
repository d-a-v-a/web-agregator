import React, {useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import * as yup from "yup";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import hidePasswordSvg from "../../assets/images/icons/eyes/hide_password.svg";
import showPasswordSvg from "../../assets/images/icons/eyes/show_password.svg";
import {ShowPassword} from "./Register/Basic";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false)

    const schema = yup.object().shape({
        email: yup.string()
            .required('Обязательное поле'),
        password: yup.string()
            .required('Обязательное поле')
    });

    type FormData = yup.InferType<typeof schema>;

    const {register, handleSubmit, formState: {errors, dirtyFields}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const handleLogin = (formValue: { email: string; password: string }): void => {
        // sending
        console.log(formValue);
    };

    return (
        <AuthWrapper>
            <form onSubmit={handleSubmit(handleLogin)}>
                <AuthTitle>Вход</AuthTitle>
                <AuthLabel isInvalid={!!errors.email}>
                    <AuthInput
                        {...register("email")}
                        type={'text'}
                        placeholder={'Почта от ЛК УрФУ'}/>
                    {
                        dirtyFields?.email && !errors.email ?
                            <ErrorText>Введите почту УрФУ</ErrorText> :
                            <ErrorText>{ errors.email?.message }</ErrorText>
                    }
                </AuthLabel>
                <AuthLabel isInvalid={!!errors.password}>
                    <AuthInput
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        placeholder={'Пароль'}
                        autoComplete={'off'}
                    />
                    <ShowPassword
                        alt={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowPassword(prevState => !prevState)}
                    />
                    <ErrorText>
                        {
                            errors.password?.message ||
                            <SubInput to='/auth/recovery/search-email'>Забыли пароль?</SubInput>
                        }
                    </ErrorText>
                </AuthLabel>
                <AuthBtn type={'submit'}>
                    Войти
                </AuthBtn>
            </form>
            <AuthSubBtn to='/auth/register'>Регистрация</AuthSubBtn>
        </AuthWrapper>
    )
}

export default Login

export const AuthWrapper = styled.div`
    width: 100%;
`

export const AuthTitle = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 600;
    font-size: 2.6rem;
`

export const AuthLabel = styled.label<{ isInvalid?: any }>`
    position: relative;
    display: block;
    margin-bottom: 4rem;

    ${({isInvalid}) => isInvalid && `
        input {
            border-color: #C86571 !important;
        }
        
        input::placeholder {
            color: #C86571 !important;
        }
        
        p {
         color: #FF8197;
        }
    `}
`
export const LabelText = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: var(--input-title);
`

export const ErrorText = styled.p<{bigSize?: boolean}>`
    position: absolute;
    bottom: -1.2rem;
    left: 1px;
    height: 1.6rem;
    z-index: 0;

    transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;

    padding-top: 0.8rem;
    font-weight: 400;
    font-size: ${p => p.bigSize ? '1.8rem' : '1.4rem' };
    line-height: 1.9rem;
    color: var(--input-title);
`

export const AuthBottom = styled.div`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
`

export const AuthInput = styled.input`
    position: relative;
    display: block;
    z-index: 1;
    flex: 1;
    width: 100%;
    height: 5.4rem;
    padding: 0 2rem;

    font-weight: 300;
    font-size: 1.6rem;

    color: var(--white-color);
    background-color: var(--rgba-grey-color);
    border: 1px solid var(--light-grey-color);
    border-radius: 4px;

    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

    &::placeholder {
        color: var(--rgba-white-color);

        transition: color 0.3s ease-in-out;
    }

    &:focus {
        background-color: var(--rgba-grey-color);
    }
`

export const SubInput = styled(Link)`
    display: block;
    cursor: pointer;
    color: var(--grey-rgba-color);
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--blue-bg);
    }
`

export const AuthBtn = styled.button`
    width: 100%;
    background-color: var(--blue-bg);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2rem;
    height: 5.6rem;
    margin: 3.5rem 0 1.7rem;
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
    font-size: 1.6rem;
    text-align: center;
    color: var(--blue-bg);
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--white-color);
    }
`