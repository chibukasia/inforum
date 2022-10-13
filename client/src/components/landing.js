import loginavi from "../loginavi.png";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
    return (
        <div className="landing">
        <div className="section-holder">
        <div className="text">
        <h1>Follow the ideas from your favourite topics.</h1>
        <h1>Participate in the discourse.</h1>
        <h1>Give your ideas a voice.</h1>
        </div>
        <div className="brand">
        <GiNotebook className="logo" color="green" size="25rem"/>
        </div>
        </div>
        <Link to="/signup" className="get-started"><input type="submit" value="Start reading"/></Link>
        <div className="footer">
        <div className="footer-content">
        <p style={{ color: "green"}}>© 2022 Inforum. All rights reserved.</p>
        <p style={{ color: "green"}}>Terms of use</p>
        <p style={{ color: "green"}}>FAQ</p>
        <p style={{ color: "green"}}>Privacy Policy</p>
        </div>
        </div>
        </div>
    );
}
 
export default Landing;