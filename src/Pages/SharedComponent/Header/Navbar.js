import React from "react";
import logo from "../../../assets/image/logo_travel_.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="custom_logo" />
          </a>
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
                <a
                  className="nav-link fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold active" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold active" href="#">
                  Tours
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold active btn-danger text-light px-3 rounded-pill"
                  href="#"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
