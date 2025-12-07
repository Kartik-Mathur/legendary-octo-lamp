import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://bookish-robot-pearl.vercel.app/'
})

export default axiosApi