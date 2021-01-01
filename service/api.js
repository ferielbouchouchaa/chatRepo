import axios from 'axios'

const URL = 'http://192.168.1.21:3000/';
const api=axios.create({
    baseURL:URL
})

export {URL};
export default api;