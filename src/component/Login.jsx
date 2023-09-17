import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';
import img1 from "../images/log.svg"
import img2 from "../images/register.svg"


function Login() {  
  const navigate = useNavigate();
  // =====================Function=========================
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  // =======================Signup Login======================
  const [luser, setLuser] = useState("");
  const [lpass, setLpass] = useState("");
  const [suser, setSuser] = useState("");
  const [semail, setSemail] = useState("");
  const [spass, setSpass] = useState("");

  // ===========================SignUp=====================================
  async function Signup(e) {
    e.preventDefault();
    if (suser.length == 0 || semail.length == 0 || spass.length == 0) alert("Invalid Data!");
    else if (suser.length < 5) alert("Invalid Username");
    else if (semail.length < 5) alert("Invalid Email");
    else {
      let res = await fetch("https://cartlaneclone.onrender.com/users");
      let data = await res.json();
      let temp = 0;
      for (var i = 0; i < data.length; i++) {
        if (suser === data[i].username) temp = 1;
      }
      if (temp == 1) alert("Username can't be same");
      else {
        let obj = {
          "username": suser, "email": semail, "password": spass
        };
        let res = await fetch("https://cartlaneclone.onrender.com/users", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json",
          }
        });
        alert("SignUp Sucssfully 😄")
        setSuser(""); setSemail(""); setSpass("");
      }
    }
  }
  // =================================Login=======================================
  async function Login(e){
    e.preventDefault();
    if (luser.length == 0 || lpass.length == 0) alert("Invalid Data!");
    else if(luser=='admin' && lpass=="123")navigate("/Cartlane-Clone-Frontend/admin");  
    else{
      let res = await fetch("https://cartlaneclone.onrender.com/users");
      let data = await res.json();
      let temp = 0;
      for (var i = 0; i < data.length; i++) {
        if (luser === data[i].username && lpass==data[i].password){          
          localStorage.setItem('jewellslogin',true);
          localStorage.setItem('jewellsUserName',data[i].username);
          navigate("/Cartlane-Clone-Frontend/");          
          navigate(0);
          temp=1;
          break;
        }
      }
      if(temp==0)alert("Invalid Data!");
    }
  }

  //==================================================================================
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`cont ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={luser} onChange={(e) => { setLuser(e.target.value) }} />
            </div>
            <div className="input-field"  style={{display:'flex',justifyContent:"space-around"}} >
              <i className="fas fa-lock"></i>
              <input  type={showPassword ? "text" : "password"} placeholder="Password" value={lpass} onChange={(e) => { setLpass(e.target.value) }} />
              <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePasswordVisibility}
            ></i>
            </div>
            <input type="submit" value="Login" className="btn solid" id='logbtn' onClick={Login} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={suser} onChange={(e) => { setSuser(e.target.value) }} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={semail} onChange={(e) => { setSemail(e.target.value) }} />
            </div>
            <div className="input-field"  style={{display:'flex',justifyContent:"space-around"}}>
              <i className="fas fa-lock"></i>
              <input  type={showPassword ? "text" : "password"} placeholder="Password" value={spass} onChange={(e) => { setSpass(e.target.value) }} />
              <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePasswordVisibility}
            ></i>
            </div>
            <input type="submit" className="btn" value="Sign up" id='logbtn' onClick={Signup} />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/Cartlane-Clone-Frontend/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={img1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
