import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constant/constain.jsx';

function OAuth2RedirectHandler() {
    const location = useLocation();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');
    console.log("Token:", token);
console.log("Error:", error);
    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to="/hod/user-list" replace />;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default OAuth2RedirectHandler;
