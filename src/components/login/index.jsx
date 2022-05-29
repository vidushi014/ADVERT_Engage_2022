import React from "react";
import "./login.css";
import mockup from "../../assets/mockup.png";

import { WebcamCapture } from "../webcam";

const Login = () => {
  // console.log("login");
  return (
    <div className="container-fluid ">
      <div className="loginContainer d-flex  justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Login</h1>
          <div className="col-md-3">
            <label htmlFor="email">Email
                <input type="email" name="email" id="email"  placeholder="Enter your email..."/>
            </label>
            <label htmlFor="password">Email
                <input type="password" name="password" id="password"  placeholder="Password"/>
            </label>
            <button>Login</button>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Login</h1>
          <div className="col-md-3">
            <label htmlFor="email">Email
                <input type="email" name="email" id="email"  placeholder="Enter your email..."/>
            </label>
            <label htmlFor="password">Email
                <input type="password" name="password" id="password"  placeholder="Password"/>
            </label>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
