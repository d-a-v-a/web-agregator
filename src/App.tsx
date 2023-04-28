import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Project from "./pages/Project/Project";

const AppStyle = styled.div`
  background-color: var(--main-bg-color);
`



function App() {
  return (
      <BrowserRouter>
        <AppStyle>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="project" element={<Project />} />
          </Routes>
          <Footer/>
        </AppStyle>
      </BrowserRouter>
  );
}

export default App;
