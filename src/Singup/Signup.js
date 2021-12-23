import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div>
      <div className="full-screen-container">
        <div className="login-container">
          <h3 className="login-title">Welcome to Log in Page</h3>
          <form>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control input"
                name="username"
                id="username"
                placeholder="Name"
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control input"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
