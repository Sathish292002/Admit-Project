import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// image imports
import bgImage from "./assets/from-background-image.jpg";
import logo from "./assets/logo.png";
import Drone from "./assets/icons/drone.png";
import user from "./assets/icons/icons8-person-96.gif"
import lock from "./assets/icons/icons8-password.gif"
import "./style-sheet/login-page.css";


export default function LoginPage() {
  return (
    <div className="">
      <div class="container-fluid" >
        <div className="row align-items-center min-vh-100">
          <div className="col-sm-6">
            <img
              src={logo}
              alt="login"
              className="img-fluid login-logo"
            />
            <div className="container">
              <div className="row">
                <div className="col-sm-5 mx-auto">
                  <from className="login-container">
                    <h2 className="login-title text-center">LOGIN</h2>
                    <p className="login-subtitle text-center">
                      If You Are Already A Member, Easily <br /> Log In
                    </p>

                    <div className="input-box">
                      <span className="icon"> <img src={user} alt="user icon" className="icon-image" /> </span>
                      <input type="text" placeholder="User Name or Email" />
                    </div>

                    <div className="input-box">
                      <span className="icon"><img src={lock} alt="user lock" className="icon-image" /></span>
                      <input type="password" placeholder="Password" />
                    </div>

                    <div className="remember-forgot">
                      <div className="remember">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                      <a href="#" className="forgot">Forgot Password?</a>
                    </div>


                    <button className="login-btn">Login</button>

                    <div className="divider">
                      <span>OR</span>
                    </div>

                    <p className="register-text">
                      Don't have an Account? <a href="#">Register</a>
                    </p>
                  </from>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-0">
            <img
              src={bgImage}
              alt="login"
              className="img-fluid login-image"
            />
            <img src={Drone} alt="drone" className="drone-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
