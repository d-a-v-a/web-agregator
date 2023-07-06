import React, {useContext, useEffect} from 'react';
import {InputBox, LabelBox, ProfileFormStyle, ProfileInput, TitleInput} from "./Information";
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import {Context} from "../Context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorText} from "../../Auth/Login";
import hidePasswordSvg from "../../../assets/images/hide_password.svg";
import showPasswordSvg from "../../../assets/images/show_password.svg";
import {ShowPassword} from "../../Auth/Register/Basic";

const schema = yup.object({
    oldPassword: yup.string()
        .required('Обязательное поле'),
    nowPassword: yup.string()
        .required('Обязательное поле')
        .min(8, 'Минимум 8 символов'),
    confirmPassword: yup.string()
        .required('Обязательное поле')
        .oneOf([yup.ref('nowPassword')], 'Пароли не совпадают'),
}).required();

type FormData = yup.InferType<typeof schema>;

const Security = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isDirty, isValid}
    } = useForm<FormData>({
        mode: 'all',
        defaultValues: {
            oldPassword: '',
            nowPassword: '',
            confirmPassword: ''
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        setStatus(['Изменения сохранены', '#47FFA7'])
        reset()
    }
    // @ts-ignore
    const {SetLabel, setStatus, setButtonState} = useContext(Context)

    const [showOldPassword, setShowOldPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    useEffect(() => {
        SetLabel('Безопасность')
    }, []);

    useEffect(() => {
        setButtonState((prevState: any) => ({
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
            isDirty: isDirty,
            isValid: isValid
        }))
    }, [isDirty, isValid]);

    return (
        <ProfileFormStyle onSubmit={handleSubmit(onSubmit)} noValidate>
            <LabelBox>
                <TitleInput>Почта ЛК УрФУ</TitleInput>
                <InputBox>
                    <ProfileInput disabled={true} readOnly={true} value={'avarts360@urfu.me'}/>
                </InputBox>
                <DescInput>Недоступно для изменения</DescInput>
            </LabelBox>
            <TitleBox>
                <H2Style>Изменение пароля</H2Style>
                <ProfileParagraph>Обновите свой текущий пароль</ProfileParagraph>
            </TitleBox>
            <LabelBox isInvalid={!!errors.oldPassword}>
                <TitleInput required={true}>Старый пароль</TitleInput>
                <InputBox flex>
                    <ProfileInput
                        type={showOldPassword ? "text" : "password"}
                        {...register("oldPassword")}
                        placeholder={'Введите старый пароль'}/>
                    <ShowPassword
                        alt={showOldPassword ? "Hide password" : "Show password"}
                        src={showOldPassword ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowOldPassword(prevState => !prevState)}
                    />
                </InputBox>
                <ErrorText>{errors.oldPassword?.message}</ErrorText>
            </LabelBox>
            <LabelBox isInvalid={!!errors.nowPassword}>
                <TitleInput required={true}>Новый пароль</TitleInput>
                <InputBox flex>
                    <ProfileInput
                        type={showPassword ? "text" : "password"}
                        {...register("nowPassword")}
                        placeholder={'Введите новый пароль'}/>
                    <ShowPassword
                        alt={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowPassword(prevState => !prevState)}
                    />
                </InputBox>
                <ErrorText>{errors.nowPassword?.message}</ErrorText>
            </LabelBox>
            <LabelBox isInvalid={!!errors.confirmPassword}>
                <TitleInput required={true}>Подтвердите пароль</TitleInput>
                <InputBox flex>
                    <ProfileInput
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword")}
                        placeholder={'Повторите новый пароль'}/>
                    <ShowPassword
                        alt={showConfirmPassword ? "Hide password" : "Show password"}
                        src={showConfirmPassword ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowConfirmPassword(prevState => !prevState)}
                    />
                </InputBox>
                <ErrorText>{errors.confirmPassword?.message}</ErrorText>
            </LabelBox>
        </ProfileFormStyle>
    )
}

export default Security

const TitleBox = styled.div`
  margin-bottom: 50px;

  h2 {
    margin-bottom: 8px !important;
  }
`

const ProfileParagraph = styled.p`
  font-size: 18px;
  color: var(--grey-title);
`

const DescInput = styled.p`
  margin-top: 15px;
  text-align: right;

  font-weight: 400;
  font-size: 18px;
  color: var(--title-blue-grey);
`

