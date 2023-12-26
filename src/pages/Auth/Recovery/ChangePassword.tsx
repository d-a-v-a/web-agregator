import React from "react";
import {AuthBtn, AuthInput, AuthLabel, AuthTitle, AuthWrapper, ErrorText, LabelText} from "../Login";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import hidePasswordSvg from "../../../assets/images/icons/eyes/hide_password.svg";
import showPasswordSvg from "../../../assets/images/icons/eyes/show_password.svg";
import {ShowPassword} from "../Register/Basic";

const schema = yup.object({

    password: yup.string()
        .required('Обязательное поле')
        .min(8, 'Минимум 8 символов'),
    confirmPassword: yup.string()
        .required('Обязательное поле')
        .oneOf([yup.ref('password')], 'Пароли не совпадают')
}).required();

type FormData = yup.InferType<typeof schema>;

const ChangePassword = () => {
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        navigate("/auth/login");
    }

    const {register, handleSubmit, formState: {errors, dirtyFields}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const [showPassword, setShowPassword] = React.useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false)

    return (
        <AuthWrapper>
            <AuthTitle>Востановление пароля</AuthTitle>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
                <AuthLabel isInvalid={!!errors.password}>
                    <AuthInput
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        placeholder={'Пароль'}
                    />
                    <ShowPassword
                        alt={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowPassword(prevState => !prevState)}
                    />
                    {
                        <ErrorText>{errors.password?.message || 'Придумайте новый пароль'}</ErrorText>
                    }
                </AuthLabel>
                <AuthLabel isInvalid={!!errors.confirmPassword}>
                    <AuthInput
                        type={showPasswordConfirm ? "text" : "password"}
                        {...register("confirmPassword")}
                        placeholder={'Подтвердите пароль'}
                    />
                    <ShowPassword
                        alt={showPasswordConfirm ? "Hide password" : "Show password"}
                        src={showPasswordConfirm ? hidePasswordSvg : showPasswordSvg}
                        onClick={() => setShowPasswordConfirm(prevState => !prevState)}
                    />
                    {
                        <ErrorText>{errors.confirmPassword?.message || 'Повторите, чтобы не ошибиться'}</ErrorText>
                    }
                </AuthLabel>
                <AuthBtn type={"submit"}>
                    Продолжить
                </AuthBtn>
            </form>
        </AuthWrapper>
    )
}

export default ChangePassword
