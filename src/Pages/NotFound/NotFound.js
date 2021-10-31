import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="mt-5">404 Page not found.</h1>
        <Link to="/home" className="btn btn-outline-primary my-5">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
