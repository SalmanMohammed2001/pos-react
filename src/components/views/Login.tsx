import React, {useState} from "react";
import {Link} from "react-router-dom";
import AxiosInstance from "../config/axiosInstance.ts";


const  Login:React.FC=()=>{

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')





    const login= async ()=>{

        try{
            const response = await AxiosInstance.post('http://localhost:3000/api/v1/users/login', {
                 email, password
            });

            setEmail('')
            setPassword('')
            console.log(response.data.token)

            const expirationDate=new Date();
            expirationDate.setDate(expirationDate.getDate()+2);

            const cookieValue=encodeURIComponent('token')+'='+encodeURIComponent(response.data.token)+';expires='+expirationDate.toISOString()+'; path=/'

            document.cookie=cookieValue


        }catch (e){
            console.log(e)
        }

    }


    return(
        <div>

            <br/>
            <div className={"container"}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <input type="email" value={email} className={"form-control"} placeholder={"email Here"} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="password"  value={password} className={"form-control"} placeholder={"password Here"} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <button className={"btn btn-primary col-12"} onClick={login}>Login</button>
                        <br/>
                        <br/>
                        <Link  className={"btn btn-outline-dark col-12"} to={"/signup"}>Sign up</Link>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Login