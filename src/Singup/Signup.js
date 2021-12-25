import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div>
      <div className="full-screen-container">
        <div className="login-container">
          <h3 className="login-title">Login</h3>
          <article className="Inputfiled">
            <label>Username:</label>
            <input
              type="text"
              className="form-control input my-3"
              name="username"
              id="username"
              placeholder="Name"
            />
            <label>Password:</label>
            <input
              type="password"
              className="form-control input my-3"
              name="password"
              id="password"
              placeholder="Password"
            />

            <button type="submit" className="login-button">
              Log In
            </button>
            <p>
              Don't have Account? <strong>Register Now!</strong>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Signup;
