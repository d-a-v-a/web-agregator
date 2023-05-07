import React from "react";
import {AuthBtn, AuthInput, AuthLabel} from "../Login";
import {Step, Steps} from "./Basic";
import {Link} from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <Steps>
                <Link style={{'flex': '0 0 30px'}} to={'/auth/register'}>
                    <Step isActive={true}>1</Step>
                </Link>
                <Step isActive={true}>2</Step>
            </Steps>
            <AuthLabel>
                <AuthInput type={'text'} placeholder={'Имя'}/>
            </AuthLabel>
            <AuthLabel>
                <AuthInput type={'text'} placeholder={'Фамилия'}/>
            </AuthLabel>
            <AuthLabel>
                <AuthInput type={'text'} placeholder={'Академ. группа'}/>
            </AuthLabel>
            <AuthBtn to={'/'}>
                Зарегистрироваться
            </AuthBtn>
        </>
    )
}

export default Contacts


