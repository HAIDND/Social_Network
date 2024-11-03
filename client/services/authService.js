// src/services/authService.js
import { API_BASE_URL } from "~/config/apiConfig";
export const loginUser = async (user) => {
    const response = await fetch(`http://localhost:4000/auth/signin/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include",
        body: JSON.stringify({ user }),
    });
    return response.json();
};
const login = async (user) => {
    try {
        //https://jsonplaceholder.typicode.com/posts 'http://localhost:4000/auth/signin/'
        let response = await fetch("http://localhost:4000/auth/signin/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const logout = async () => {
    try {
        let response = await fetch("api/signout", {
            method: "GET",
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { login, logout };
