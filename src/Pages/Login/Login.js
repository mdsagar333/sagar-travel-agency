import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useContextAPI from "../../Hooks/useContextAPI";

function Login() {
  const { signInWithGoogle } = useContextAPI();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-0 col-md-2 col-lg-3"></div>
        <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
          <div className="login_container border border-2 p-4 w-100 mb-5">
            <div className="py-3 py-md-5 my-md-5 my-3">
              <h1 className="text-center mt-3 mb-5">Login With</h1>
              <button className="btn btn-outline-primary text-capitalize w-100 rounded-pill position-relative p-2">
                <span className="custom_icon_container">
                  <FcGoogle className="custom_icon_google" />
                </span>
                Continue with google
              </button>
              <p className="text-center my-3">
                Don't have an account?{" "}
                <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-0 col-md-2 col-lg-3"></div>
      </div>
    </div>
  );
}

export default Login;
