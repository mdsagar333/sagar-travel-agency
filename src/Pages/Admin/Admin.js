import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import useContextAPI from "../../Hooks/useContextAPI";

const Admin = () => {
  const { adminSignUp, adminSignIn } = useContextAPI();
  const [adminEmail, setAdminEmail] = useState(null);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminErrorAuth, setadminErrorAuth] = useState("");
  const history = useHistory();
  const redirectUrl = "/";
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    setadminErrorAuth("");
    adminSignIn(email, password)
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((err) => {
        setadminErrorAuth(
          "There is something wrong. Please check your admin credentials."
        );
      });
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4">Admin Login</h1>
      <div className="row mb-5">
        <div className="col-0 col-md-3"></div>
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit}>
            {adminErrorAuth.length > 0 && (
              <p className="text-danger small">{adminErrorAuth}</p>
            )}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={emailRef}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passRef}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-0 col-md-3"></div>
      </div>
    </div>
  );
};

export default Admin;

// admin@sagartravel.com
// admin12345
