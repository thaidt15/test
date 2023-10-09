import axios from 'axios';
import queryString from 'query-string';
import { ACCESS_TOKEN } from '../constant/constain';
import {Navigate } from 'react-router-dom'
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
    body: (params) => JSON.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        console.log("Authorization header set");
    } else {
        console.warn("No access token found in localStorage.");
    }
    return config;
});

export default axiosClient;