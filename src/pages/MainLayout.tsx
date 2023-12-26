import React from "react";
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";

const MainLayoutStyle = styled.div`
  min-height: 100vh;
  background-color: var(--main-bg-color);
`

function MainLayout() {
    return (
        <MainLayoutStyle>
            <Header/>
            <Outlet/>
            <Footer/>
        </MainLayoutStyle>
    )
}


export {MainLayout}