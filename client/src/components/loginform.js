import React from "react";
import "./loginform.css";
import loginavi from "../loginavi.png";
//import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="loginform">
        <div className="head">
      <img src={loginavi} alt="login avi" />
      <br></br>
      <h1>Inforum</h1>
      <br></br>
      <p>Give your ideas a voice.</p>
      </div> 
      <form>
        <h2>Log In</h2>
        <br></br>
        <input type="text" placeholder="Username" required /> <br></br> 
        <input type="password" placeholder="Password" required /><br></br>

        <div>
          <input type="submit" value="Login" />
        </div>
        <h3>Don't have an account?</h3>
        <Link to="/signup" style={{ textDecoration: 'none', color: "green" }}>Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
