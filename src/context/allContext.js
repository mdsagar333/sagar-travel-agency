import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useFirebaseAuth from "../Hooks/useFirebaseAuth";

export const contextAPI = createContext();

const AllContextAPI = ({ children }) => {
  const [dataLoading, setDataloading] = useState(true);
  const [dataError, setDataError] = useState("");
  const [tours, setTours] = useState([]);
  const {
    user,
    errorAuth,
    userLoading,
    signInWithGoogle,
    logOut,
    adminSignUp,
    adminSignIn,
  } = useFirebaseAuth();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://dark-phantom-53445.herokuapp.com/api/tours"
      );
      const { status, data } = result;
      console.log(data);
      if (status === 200) {
        setTours(data.data.tours);
      } else {
        setDataError("There was something wrong. please try again later!.");
      }
      setDataloading(false);
    };

    fetchData();
  }, []);

  return (
    <contextAPI.Provider
      value={{
        tours,
        dataLoading,
        dataError,
        user,
        errorAuth,
        userLoading,
        signInWithGoogle,
        logOut,
        adminSignUp,
        adminSignIn,
      }}
    >
      {children}
    </contextAPI.Provider>
  );
};

export default AllContextAPI;
