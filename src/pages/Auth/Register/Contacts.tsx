import React, {useEffect} from "react";
import {AuthBtn, AuthInput, AuthLabel, ErrorText} from "../Login";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useData} from "../../../context/DataContext";

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
    const {data, setValues} = useData();

    const {register, handleSubmit, watch, formState: { errors, dirtyFields, submitCount, isDirty }} = useForm<FormData>({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            group: data.group
        },
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            setValues(value)
        )
        return () => subscription.unsubscribe()
    }, [watch]);

    const onSubmit = (currentData: FormData) => {
        setValues(currentData);
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
            <AuthLabel isInvalid={!!errors.firstName}>
                <AuthInput {...register("firstName")} type={'text'} placeholder={'Имя'}/>
                {
                    dirtyFields?.firstName && !errors.firstName ?
                        <ErrorText>Введите свое имя</ErrorText> :
                        <ErrorText>{ errors.firstName?.message }</ErrorText>
                }
            </AuthLabel>
            <AuthLabel isInvalid={!!errors.lastName}>
                <AuthInput {...register("lastName")} type={'text'} placeholder={'Фамилия'}/>
                {
                    dirtyFields?.lastName && !errors.lastName ?
                        <ErrorText>Введите свою фамилию</ErrorText> :
                        <ErrorText>{ errors.lastName?.message }</ErrorText>
                }
            </AuthLabel>
            <AuthLabel isInvalid={!!errors.group}>
                <AuthInput {...register("group")} type={'text'} placeholder={'Академ. группа'}/>
                {
                    dirtyFields?.group && !errors.group ?
                        <ErrorText>Введите академическую группу</ErrorText> :
                        <ErrorText>{ errors.group?.message }</ErrorText>
                }
            </AuthLabel>
            <AuthBtn type={"submit"}>
                Зарегистрироваться
            </AuthBtn>
        </form>
    )
}

export default Contacts

