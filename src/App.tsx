import React from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterLayout from "./pages/Auth/Register/RegisterLayout";
import Project from "./pages/Project/Project";
import {MainLayout} from "./components/MainLayout";
import {AuthLayout} from "./components/AuthLayout";
import ProjectEditing from "./pages/ProjectEditing/ProjectEditing";

import ChangePassword from "./pages/Auth/Recovery/ChangePassword";
import Play from "./pages/Play/Play";
import Information from "./pages/Profile/components/Information";
import Security from "./pages/Profile/components/Security";
import MyProjects from "./pages/Profile/components/MyProjects";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import SearchOnEmail from "./pages/Auth/Recovery/SearchOnEmail";
import SuccessInfo from "./pages/Auth/Recovery/SuccessInfo";


function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='project' element={<Project/>}/>
                <Route path='editing' element={<ProjectEditing/>}/>

                <Route path='play' element={<Play/>}/>
                <Route path='profile' element={<ProfileLayout/>}>
                    <Route path='my-projects' element={<MyProjects/>}/>
                    <Route path='information' element={<Information/>}/>
                    <Route path='security' element={<Security/>}/>
                </Route>
            </Route>
            <Route path='auth' element={<AuthLayout/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<RegisterLayout/>}/>
                <Route path='recovery'>

                    <Route path='search-email' element={<SearchOnEmail/>}/>
                    <Route path='success-info' element={<SuccessInfo/>}/>
                    <Route path='change-password' element={<ChangePassword/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
