import React from "react";
import { Redirect, Route } from "react-router";
import useContextAPI from "../../../Hooks/useContextAPI";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContextAPI();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
