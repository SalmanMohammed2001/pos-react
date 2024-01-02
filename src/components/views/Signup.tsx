import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


const Signup:React.FC=()=>{

    const[fullName,setFullName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')




    const signUp= async ()=>{

        const response = await axios.post('http://localhost:3000/api/v1/users/signup', {
            fullName, email, password
        });
        setPassword('')
        setFullName('')
        setPassword('')

            alert(response.data.message)

    }
    return(
        <div>

            <br/>
            <div className={"container"}>
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <input type="text" value={fullName} className={"form-control"} placeholder={"Full Name Here"} onChange={(e)=>setFullName(e.target.value)}/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="col-4">
                        <div className="form-group">
                            <input type="email" value={email} className={"form-control"} placeholder={"email Here"} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <input type="password" value={password} className={"form-control"} placeholder={"password Here"} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <button className={"btn btn-primary col-12"} onClick={signUp}>Register Now</button>
                        <br/>
                        <br/>
                        <Link  className={"btn btn-outline-dark col-12"} to={"/login"}>Already Have An Account</Link>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Signup