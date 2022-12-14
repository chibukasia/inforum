import React, {useState} from "react";
import "./loginform.css";
import loginavi from "../loginavi.png";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))
        .then(() => navigate('/blogs'))

      } 
      else{
        r.json().then((err) => setErrors([err.errors]));
      }
    });
  }

  return (
    <div className="loginform">
        <div className="head">
      <img src={loginavi} alt="login avi" />
      <h1>Inforum</h1>
      <p>Give your ideas a voice.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input type="text"
           placeholder="Username" 
           autoComplete="off"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required 
           />
            <br></br> 
        <input 
            type="password" 
            placeholder="Password" 
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
            <br></br>

        <div>
          <input type="submit" value={isLoading ? "Loading..." : "Login"} />
        </div>
        <div>
        {errors.map((err) => (
          <p className="error" key={err}>{err}</p>
        ))
        }
        </div>
        <h3>Don't have an account?</h3>
        <Link to="/signup" style={{ textDecoration: 'none', color: "green" }}>Sign up</Link>
          </form>
    </div>
  );
}; 

export default LoginForm;