
import { authHeader } from '../helpers';
import DataService from "@/services/DataService.js";

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(`http://192.168.1.103:3002/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                // console.log('here function run')
                localStorage.setItem('user', JSON.stringify(user));
                // location.reload();
                window.location = "/";
            }
            return user;
        }).catch( error => {
            if(error){
                alert('Email and Password Wrong')
            }
            
        });
}

function  logout() {
    DataService.logout().then(response => {	
        if(response.status == 200){
            // location.reload();
            window.location = "/";
            localStorage.removeItem('user');
             
        }
    })
    .catch(e => {
        console.log(e);
    });    
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://192.168.1.103:3002/api/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
export const userService = {
    login,
    logout,
    getAll
};