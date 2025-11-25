import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dl3w-back.onrender.com/api/v1' //'http://localhost:8180/api/v1' 

});

export default api;