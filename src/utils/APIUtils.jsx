import { API_BASE_URL, ACCESS_TOKEN } from '../constant/constain.jsx';
import axiosClient from '../api/axiosClient.jsx';
const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); 
        }
        return response.json();
    })
    .then(json => {
        return json;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
        throw error; 
    });
};

export function getCurrentUser() {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }
    return axiosClient.get(API_BASE_URL + "/api/user/me");
}

