import axios, {AxiosInstance} from "axios";
import BASE_URL from "./ApiConfig.ts";


const instance:AxiosInstance=axios.create({
    baseURL:BASE_URL
});

instance.interceptors.request.use(
    (config)=>{
        //token

        console.log('interceptor')

        return config;
    },
    (error)=>{return Promise.reject(error)}
)


export default instance;