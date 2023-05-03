import React from "react";
import styled from "styled-components";
import {Outlet} from "react-router-dom";


const AuthLayoutStyle = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--main-bg-color);
`

function AuthLayout() {
  return(
      <AuthLayoutStyle>
        <Outlet/>
      </AuthLayoutStyle>
  )
}

export {AuthLayout}