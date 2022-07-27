import axios from "axios";

export const requestApi = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});