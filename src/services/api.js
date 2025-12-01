import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dl3w-back.onrender.com/api/v1' //'http://localhost:3000/api/v1' 

});

export default api;