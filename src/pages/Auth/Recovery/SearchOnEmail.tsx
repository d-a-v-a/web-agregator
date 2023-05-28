import React from "react";
import {AuthBtn, AuthInput, AuthLabel, AuthTitle, AuthWrapper, ErrorText} from "../Login";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";

const schema = yup.object({
  email: yup.string()
      .required('Обязательное поле')
      .email('Неверное значение')

}).required();

type FormData = yup.InferType<typeof schema>;

const SearchOnEmail = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    navigate("/auth/recovery/success-info");
  }

  return (
      <AuthWrapper>
        <AuthTitle>Востановление пароля</AuthTitle>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
          <AuthLabel isInvalid={!!errors.email}>
            <AuthInput {...register("email")} type={'text'} placeholder={'Почта от ЛК УрФУ'}/>
            <ErrorText>{errors.email?.message}</ErrorText>
          </AuthLabel>
          <AuthBtn type={"submit"}>
            Отправить
          </AuthBtn>
        </form>
      </AuthWrapper>
  )
}

export default SearchOnEmail

