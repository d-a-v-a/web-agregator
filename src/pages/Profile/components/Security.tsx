import React, {useContext, useEffect} from 'react';
import {InputBox, LabelBox, ProfileFormStyle, ProfileInput, TitleInput} from "./Information";
import styled from "styled-components";
import {H2Style} from "../../ProjectEditing/ProjectEditing";
import {Context} from "../Context";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorText} from "../../Auth/Login";
import hidePasswordSvg from "../../../assets/images/icons/eyes/hide_password.svg";
import showPasswordSvg from "../../../assets/images/icons/eyes/show_password.svg";
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
        watch,
        reset,
        formState: {errors, isDirty, isValid}
    } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const emailUser = 'Ivanov.Ivan@urfu.me';
    const statusObj = {
        noChanges: ['Изменений нет', '#47BDFF'],
        changesMade: ['Внесены изменения', '#FBFF47'],
        changesSave: ['Изменения сохранены', '#47FFA7'],
    }

    const onSubmit = (data: FormData) => {
        setTimeout(() => {
            setStatus(statusObj.changesSave);
        })
        reset();
    }

    // @ts-ignore
    const {SetLabel, SetBtn, setStatus, setButtonState} = useContext(Context)

    const [showOldPassword, setShowOldPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    useEffect(() => {
        setStatus(statusObj.noChanges);
        SetLabel('Безопасность');
        SetBtn(true);
    }, []);

    useEffect(() => {
        const subscription = watch((values: any) => {
                let sumStr = '';
                for (const key in values) {
                    sumStr += values[key]
                }
                sumStr !== '' ? setStatus(statusObj.changesMade) : setStatus(statusObj.noChanges)
            }
        )
        return () => subscription.unsubscribe()
    }, [watch]);

    useEffect(() => {
        setButtonState((prevState: any) => ({
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
            isDirty: isDirty,
            isValid: isValid,
            styles: {
                color: 'white',
                backgroundColor: 'blue',
                borderColor: 'blue',
            },
            children: 'Сохранить',
        }))
    }, [isDirty, isValid]);

    return (
        <ProfileFormStyle onSubmit={handleSubmit(onSubmit)} noValidate>
            <LabelBox>
                <TitleInput>Почта ЛК УрФУ</TitleInput>
                <InputBox>
                    <ProfileInput disabled={true} readOnly={true} value={emailUser}/>
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
    margin-bottom: 5rem;

    h2 {
        margin-bottom: 0.8rem !important;
    }
`

const ProfileParagraph = styled.p`
    font-size: 1.8rem;
    color: var(--grey-title);
`

const DescInput = styled.p`
    margin-top: 1.5rem;
    text-align: right;

    font-weight: 400;
    font-size: 1.8rem;
    color: var(--title-blue-grey);
`

