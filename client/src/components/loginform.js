import React from "react";
import "./loginform.css";
import loginavi from "../loginavi.png";
//import {useForm} from "react-hook-form";

const LoginForm = () => {
  return (
    <div className="loginform">
        <div className="head">
      <img src={loginavi} alt="login avi" />
      <h1>Inforum</h1>
      <p>Give your ideas a voice.</p>
      </div>
      
      <form>
        <h2>Log In</h2>
        <input type="text" placeholder="Username" required /> <br></br> 
        <input type="password" placeholder="Password" required /><br></br>

        <div>
          <input className="login-btn" type="submit" value="Login" />
        </div>
        <h3>Don't have an account?</h3>
        <a href="./loginform.js">Sign Up</a>
      </form>
    </div>
  );
};

export default LoginForm;
