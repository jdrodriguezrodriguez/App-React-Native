import axios from 'axios';

const ApiEnvios = axios.create({
    baseURL: 'localhost:5000/api',
    headers:{
        'Content-type': 'application/json'
    }
})

export {ApiEnvios}