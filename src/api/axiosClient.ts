import axios from "axios";


 const axiosClient = axios.create({
    baseURL: "https://apple-shop-json-server.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json"
    }
 })

 export default axiosClient