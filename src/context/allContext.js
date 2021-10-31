import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useFirebaseAuth from "../Hooks/useFirebaseAuth";

export const contextAPI = createContext();

const AllContextAPI = ({ children }) => {
  const [dataLoading, setDataloading] = useState(true);
  const [dataError, setDataError] = useState("");
  const [tours, setTours] = useState([]);
  const { user, error, userLoading, signInWithGoogle, logOut } =
    useFirebaseAuth();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/tours");
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
        error,
        userLoading,
        signInWithGoogle,
        logOut,
      }}
    >
      {children}
    </contextAPI.Provider>
  );
};

export default AllContextAPI;
