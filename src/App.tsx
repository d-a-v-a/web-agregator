import React from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterLayout from "./pages/Auth/Register/RegisterLayout";
import Project from "./pages/Project/Project";
import {MainLayout} from "./components/MainLayout";
import {AuthLayout} from "./components/AuthLayout";
import ProjectEditing from "./pages/ProjectEditing/ProjectEditing";
import Basic from "./pages/Auth/Register/Basic";
import Contacts from "./pages/Auth/Register/Contacts";
import ChangePassword from "./pages/Auth/ChangePassword";
import Play from "./pages/Play/Play";


function App() {
  return (
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='editing' element={<ProjectEditing/>}/>
            <Route path='play' element={<Play/>}/>
          </Route>
          <Route path='auth' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='change-password' element={<ChangePassword/>}/>
            <Route path='register' element={<RegisterLayout/>}>
                <Route path='' element={<Basic/>}/>
                <Route path='contacts' element={<Contacts/>}/>
            </Route>
          </Route>
        </Routes>
  );
}

export default App;
