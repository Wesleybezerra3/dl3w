import axios from 'axios';

const api = axios.create({
    baseURL:'https://dl3w-back-thom.vercel.app/api/v1'
});

export default api;