import React, { useState } from "react";
import "./signup.css"
import loginavi from "../loginavi.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrors([]);
      fetch('/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          image_url: profilePhoto,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then(() => navigate('/blogs'))
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }

    return (
            <div className="loginform">
                <div className="head">
              <img src={loginavi} alt="login avi" />
              <br></br>
              <h1>Inforum</h1>
              <br></br>
              <p>Give your ideas a voice.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <br></br>
                <input 
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <input 
                type="email" 
                placeholder="Email" 
                required 
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>  
                <input 
                type="password" 
                placeholder="Password" 
                required 
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <input 
                type="password" 
                placeholder="Confirm Password" 
                required 
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br></br>
                <input 
                type="text" 
                placeholder="Profile Photo" 
                required 
                onChange={(e) => setProfilePhoto(e.target.value)}
                />
                <br></br>
                <div>
                  {errors.map((err) => (
                    <p style={{ color: 'red'}}key={err}>{err}</p>
                  ))}
                </div>
                <div>
                  <input 
                  type="submit" 
                  value={isLoading ? "Loading..." : "Sign Up"} 
                  />
                </div>
                <h3>Already have an account?</h3>
                <Link to="/login" style={{ textDecoration: 'none', color: "green" }}>Sign in</Link>
              </form>
            </div>
          );
}
 
export default SignUp;
