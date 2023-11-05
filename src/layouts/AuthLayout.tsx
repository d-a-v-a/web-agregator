import React from "react";
import styled from "styled-components";
import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import logo from "../assets/images/logo/logo.svg";


const AuthLayoutStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);
`

const AuthWrapper = styled.div`
  flex: 1 1;
  padding: 0 20px;
  background-color: var(--main-bg-color);
`

const AuthLogo = styled.img`
  width: 248px;
  height: 53px;
`

const AuthBox = styled.div`
  padding: 60px 100px;
  max-width: 600px;
  margin: 0 auto 40px;
  background-color: var(--dark-grey-color);

  @media (max-width: 600px) {
    padding: 40px 40px;
  }

  @media (max-width: 400px) {
    padding: 40px 20px;
  }
`

function AuthLayout() {
  return(
      <AuthLayoutStyle>
        <Header/>
          <AuthWrapper>
             <Link to='/' style={{width: '250px', margin: '0 auto 30px'}}>
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