import React, {useState} from "react";
import {AuthWrapper, AuthBottom, AuthTitle, AuthSubBtn} from "../Login";
import Basic, {Step, Steps} from "./Basic";
import Contacts from "./Contacts";

const RegisterLayout = () => {
    const [step, setStep] = useState(1)

    return (
        <AuthWrapper>
            <AuthTitle>Регистрация</AuthTitle>
            <Steps>
                <Step isActive={step >= 1} onClick={() => setStep(1)}>1</Step>
                <Step isActive={step >= 2}>2</Step>
            </Steps>
            {
                step == 1
                    ? <Basic setStep={setStep} />
                    : <Contacts />
            }
            <AuthBottom>
                <AuthSubBtn to='/auth/login'>Войти</AuthSubBtn>
            </AuthBottom>
        </AuthWrapper>
    )
}

export default RegisterLayout

