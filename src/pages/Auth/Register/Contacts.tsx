import React from "react";
import {AuthBtn, AuthInput, AuthLabel, ErrorText} from "../Login";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";

const schema = yup.object({
    firstName: yup.string()
        .required('Обязательное поле'),
    lastName: yup.string()
        .required('Обязательное поле'),
    group: yup.string()
        .required('Обязательное поле'),
}).required();

type FormData = yup.InferType<typeof schema>;

const Contacts = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => {
        navigate("/auth/login");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
            <AuthLabel isInvalid={!!errors.firstName}>
                <AuthInput {...register("firstName")} type={'text'} placeholder={'Имя'}/>
                <ErrorText>{errors.firstName?.message}</ErrorText>
            </AuthLabel>
            <AuthLabel isInvalid={!!errors.lastName}>
                <AuthInput {...register("lastName")} type={'text'} placeholder={'Фамилия'}/>
                <ErrorText>{errors.lastName?.message}</ErrorText>
            </AuthLabel>
            <AuthLabel isInvalid={!!errors.group}>
                <AuthInput {...register("group")} type={'text'} placeholder={'Академ. группа'}/>
                <ErrorText>{errors.group?.message}</ErrorText>
            </AuthLabel>
            <AuthBtn type={"submit"}>
                Зарегистрироваться
            </AuthBtn>
        </form>
    )
}

export default Contacts


