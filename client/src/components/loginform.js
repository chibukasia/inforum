import React from 'react';
import"./loginform.css";
import loginavi from "../loginavi.png"

const LoginForm = ()=> {
    return (
        <div className="loginform">
            <img src={loginavi} alt="login avi" />
            <h1>Inforum</h1>
            <p>Give your ideas a voice.</p>
            <h2>Log In</h2>
            <input type="text"placeholder="Username" />
            <input type="password"placeholder="Password" />

            <div>
            <button type="button" className="login-btn"> <h3>Continue</h3></button>
            </div>
            <h3>Don't have an account?</h3>
            <a href="./loginform.js">Sign Up</a>
        </div>
    )
}

export default LoginForm