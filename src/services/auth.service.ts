import axios from "axios";

const API_URL = "http://localhost:8000/";

export const register = (username: string, email: string, password: string) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

export const login = (username: string, password: string) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.access) {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log(response.data)
            }
            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = (): any | null => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};