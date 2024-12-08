import React from "react";
import Team from "../assets/team.svg";
import Logo from "../assets/logo.svg";


export default function Login() {
  return (
   <>
      <div id="team_illustration_container">
        <img src={Team} alt="" />
      </div>

      <div id="login-right">
        <img id="login-logo" src={Logo} alt="" />
        <div>
            <h2>Welcome back!</h2>
            <p className="important_text prompt">Please enter your credentials to log in.</p>
            <form action="/api/login/" method="POST">
              <input type="email" placeholder="Your email" />
              <input type="password" placeholder="Your password" />

              <div className="remember-div">
                <input type="checkbox" id="remember-checkbox" />
                <label htmlFor="remember-checkbox" className="important_text">
                    Remember for 30 days
                 </label>
              </div>
              <button type="button" id="login-center-button">Log In</button>
            </form>
        </div>

        <p className="important_text">
            Don't have an account? Ask your administrator to create one for you.
        </p>
      </div>
   </>);
};
