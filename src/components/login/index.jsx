import React from "react";
import './login.css';
import mockup  from "../../assets/mockup.png";

import { WebcamCapture } from "../webcam";

const Login=()=>{
    // console.log("login");
    return(
        <div className="container-fluid d-flex flex-column loginContainer">
            <WebcamCapture/>
            {/* <h1>Login</h1>
            <div className="col-md-3">
                <label htmlFor="email">Email</label>
            </div> */}
        </div>
    );

}
export default Login;