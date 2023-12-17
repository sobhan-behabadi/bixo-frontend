import axios from "axios"

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: "http://bixotrade.ir:2000/api",
})
// http://94.101.178.0
// http://94.101.178.0/
// 37.152.179.24
// bixotrade.ir:2000
export default api