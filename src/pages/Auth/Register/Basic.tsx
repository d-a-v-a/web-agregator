import React from "react";
import {AuthBtn, AuthInput, AuthLabel, ErrorText} from "../Login";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import hidePasswordSvg from "../../../assets/images/icons/eyes/hide_password.svg";
import showPasswordSvg from "../../../assets/images/icons/eyes/show_password.svg";
import {useData} from "../../../context/DataContext";

interface Context {
    setStep?: any;
}

const schema = yup.object({
    email: yup.string()
        .required('Обязательное поле')
        .email('Неверное значение'),
    password: yup.string()
        .required('Обязательное поле')
        .min(8, 'Минимум 8 символов'),
    confirmPassword: yup.string()
        .required('Обязательное поле')
        .oneOf([yup.ref('password')], 'Пароли не совпадают')
}).required();

type FormData = yup.InferType<typeof schema>;

const Basic = ({ setStep }: Context) => {
    const {data, setValues} = useData()
    const { register, handleSubmit, formState: { errors, dirtyFields } } = useForm<FormData>({
        defaultValues: {
            email: data.email,
            password: data.password,
            confirmPassword: data.password
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => {
        setStep(2)
        setValues(data)
    }

    const [showPassword, setShowPassword] = React.useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false)

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete={'off'}>
            <AuthLabel isInvalid={!!errors.email}>
                <AuthInput
                    {...register("email")}
                    type={'email'}
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
                {
                    dirtyFields?.password && !errors.password ?
                        <ErrorText>Введите не менее 8 символов</ErrorText> :
                        <ErrorText>{ errors.password?.message }</ErrorText>
                }
            </AuthLabel>
            <AuthLabel isInvalid={!!errors.confirmPassword}>
                <AuthInput
                    type={showPasswordConfirm ? "text" : "password"}
                    {...register("confirmPassword")}
                    placeholder={'Подтвердите пароль'}
                    autoComplete={'off'}
                />
                <ShowPassword
                    alt={showPasswordConfirm ? "Hide password" : "Show password"}
                    src={showPasswordConfirm ? hidePasswordSvg : showPasswordSvg}
                    onClick={() => setShowPasswordConfirm(prevState => !prevState)}
                />
                <ErrorText>{ errors.confirmPassword?.message }</ErrorText>
            </AuthLabel>
            <AuthBtn type={'submit'}>
                Далее
            </AuthBtn>
        </form>
    )
}

export default Basic

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
`

export const Step = styled.button<{ isActive: boolean}>`
  position: relative;
  font-weight: 700;
  flex: 0 0 3rem;
  height: 3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p=> (p.isActive ? 'var(--blue-bg)' : 'var(--step-grey)')};
  color: var(--white-color);

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 3.5rem;
    width: 2rem;
    height: 2px;
    background-color: ${p=> (p.isActive ? 'var(--blue-bg)' : 'var(--step-grey)')};
    transition: background-color 0.3s ease-in-out;
  }
`

export const ShowPassword = styled.img`
  position: absolute;
  cursor: pointer;
  top: 1.2rem;
  right: 2.1rem;
  width: 2.8rem;
  height: 2.8rem;
  object-fit: contain;
  z-index: 2;

  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: invert(84%) sepia(20%) saturate(1100%) hue-rotate(165deg)
    brightness(88%) contrast(83%);
  }
`