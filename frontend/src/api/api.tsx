import React from "react";
import axios from 'axios';
import { ProjectInterface } from "../interfaces/Project.interface";

/**
 * basic endpoint
 */
const API_BASE_URL = 'http://127.0.0.1:8000/api';

/**
 * the function of getting information about the projects from backend
 */
export const getFullInfAboutProjects = async () => {
    let resp: ProjectInterface[] | null = null;
    await axios.get(`${API_BASE_URL}/projects/`)
    .then(response => {
        resp = response.data; 
    });
    return resp;
};

export const getProjectById = async (id: string): Promise<ProjectInterface> => {
    return await axios.get(`${API_BASE_URL}/projects/${id}/`)
        .then(response => {
            return response.data;
        });
};

/**
 * the function of getting information about profile projects from backend
 */
export const getProfile = async () => {
    let resp: ProjectInterface[] | null = null;
    await axios.get(`${API_BASE_URL}/profile/`)
    .then(response => {
        resp = response.data; 
    });
    return resp;
};

export const getImage = (path: string): string => {
    return API_BASE_URL + path;
}

// export const createPost = async (postData) => {
//   const response = await axios.post(${API_BASE_URL}/posts, postData);
//   return response.data;
// };