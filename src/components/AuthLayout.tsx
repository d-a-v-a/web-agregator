import React from "react";
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom";
import Header from "./Header/Header";
import logo from "../assets/images/logo.svg";


const AuthLayoutStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);
`

const AuthWrapper = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  background-color: var(--main-bg-color);
`

const AuthLogo = styled.img`
  width: 248px;
  height: 53px;
`

const AuthBox = styled.div`
  padding: 60px 100px;
  background-color: var(--dark-grey-color);
  margin-bottom: 40px;
`

function AuthLayout() {
  return(
      <AuthLayoutStyle>
        <Header/>
          <AuthWrapper>
             <Link to='/'>
                 <AuthLogo src={logo}/>
             </Link>
              <AuthBox>
                <Outlet/>
              </AuthBox>
          </AuthWrapper>
      </AuthLayoutStyle>
  )
}

export {AuthLayout}