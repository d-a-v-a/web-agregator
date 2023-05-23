import React from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterLayout from "./pages/Auth/Register/RegisterLayout";
import Project from "./pages/Project/Project";
import {MainLayout} from "./components/MainLayout";
import {AuthLayout} from "./components/AuthLayout";
import ProjectEditing from "./pages/ProjectEditing/ProjectEditing";
import SearchOnEmail from "./pages/Auth/Recovery/SearchOnEmail";
import SuccessInfo from "./pages/Auth/Recovery/SuccessInfo";
import ChangePassword from "./pages/Auth/Recovery/ChangePassword";


function App() {
  return (
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='editing' element={<ProjectEditing/>}/>
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
