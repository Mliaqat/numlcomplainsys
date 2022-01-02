import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:5000/login";

  const navigate = useNavigate();

  const user = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    axios
      .post(url, user)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              className="form-control input my-3"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <Link to="/dashboard" type="submit"> */}
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
            {/* </Link> */}
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
