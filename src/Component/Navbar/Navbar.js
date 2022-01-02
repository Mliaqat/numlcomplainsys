import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbg">
        <div className="container-fluid">
          <a className="navbar-brand">Numl Complain Sys</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex me-2 justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="register" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
