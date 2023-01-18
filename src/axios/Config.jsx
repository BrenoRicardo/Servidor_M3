import axios from "axios";

const API = axios.create({
    baseURL: "https://m3jsonserver.onrender.com/"
})

export default API