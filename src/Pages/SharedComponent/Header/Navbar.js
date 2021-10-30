import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo_travel_.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="custom_logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold active" to="about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold active" to="/tours">
                  Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold active btn-danger text-light px-3 rounded-pill"
                  to="/login"
                >
                  Login Or Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
