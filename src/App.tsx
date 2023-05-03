import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Project from "./pages/Project/Project";
import {MainLayout} from "./components/MainLayout";
import {AuthLayout} from "./components/AuthLayout";
import ProjectEditing from "./pages/ProjectEditing/ProjectEditing";


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
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
  );
}

export default App;
