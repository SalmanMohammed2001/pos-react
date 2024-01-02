import React, {useState} from "react";
import {Link} from "react-router-dom";

const  Login:React.FC=()=>{

    const[email,setemail]=useState('')
    const[password,setPasssword]=useState('')


    const login=()=> {
        console.log(email)
        console.log(password)
    }

    return(
        <div>

            <br/>
            <div className={"container"}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <input type="email" className={"form-control"} placeholder={"email Here"} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="password" className={"form-control"} placeholder={"password Here"} onChange={(e)=>setPasssword(e.target.value)}/>
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