import axios,{AxiosInstance,AxiosRequestConfig} from "axios";



const instance:AxiosInstance=axios.create();

instance.interceptors.request.use(
    (config:AxiosRequestConfig)=>{
        //token

        return config;
    }
)

const AxiosInstance=()=>{


}

export default AxiosInstance;