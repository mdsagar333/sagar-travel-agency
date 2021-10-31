import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo_travel_.png";
import useContextAPI from "../../../Hooks/useContextAPI";

const Navbar = () => {
  const { user, logOut } = useContextAPI();

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
                <Link className="nav-link fw-bold active" to="/about-us">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold active" to="/tours">
                  Tours
                </Link>
              </li>
              {user ? (
                <div className="d-flex flex-column flex-lg-row">
                  <li className="nav-item">
                    <Link className="nav-link fw-bold active" to="/my-orders">
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link fw-bold active"
                      to="/manage-all-orders"
                    >
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-bold active" to="/create-tour">
                      Add New Tour
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <span className="me-2 fw-bold text-info">
                      {user.displayName || user.email}
                    </span>
                    <button
                      className="nav-link fw-bold active btn-secondary text-light border-rounded border text-center"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </div>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold active btn-danger text-light px-3 rounded-pill"
                    to="/login"
                  >
                    Login Or Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
