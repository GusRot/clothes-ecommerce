import axios from "axios";

export const api = axios.create({
    baseURL: "/mock-api/V1",
});
