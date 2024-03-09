import React from "react";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";


const AuthLayoutStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--main-bg-color);
`

const AuthWrapper = styled.div`
    flex: 1 1;
    padding: 0 2rem;
    background-color: var(--main-bg-color);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AuthBox = styled.div`
    padding: 6rem 10.2rem;
    width: 54.2rem;
    max-width: 100%;
    margin: 0 auto 4rem;
    background-color: var(--dark-grey-color);

    @media (max-width: 600px) {
        padding: 4rem 4rem;
    }

    @media (max-width: 400px) {
        padding: 4rem 2rem;
    }
`

function AuthLayout() {
    return (
        <AuthLayoutStyle>
            <Header/>
            <AuthWrapper>
                <AuthBox>
                    <Outlet/>
                </AuthBox>
            </AuthWrapper>
        </AuthLayoutStyle>
    )
}

export {AuthLayout}