import React from "react";
import axios from 'axios';
import { ProjectInteface } from "../interfaces/Project.interface";

const API_BASE_URL = 'http://127.0.0.1:3030/api/';

export const getFullInfAboutProjects = async () => {
    let resp: ProjectInteface[] | null = null;
    await axios.get(`${API_BASE_URL}mainpage/`)
    .then(response => {
        resp = response.data; 
    });
    return resp;
};

export const getProfile = async () => {
    let resp: ProjectInteface[] | null = null;
    await axios.get(`${API_BASE_URL}profile/`)
    .then(response => {
        resp = response.data; 
    });
    return resp;
};

// export const createPost = async (postData) => {
//   const response = await axios.post(${API_BASE_URL}/posts, postData);
//   return response.data;
// };