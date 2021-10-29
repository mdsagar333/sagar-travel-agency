import React, { useState, useEffect } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";

initializeFirebaseAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [userLoading, userLoading] = useState(true);

  return {
    user,
    error,
    userLoading,
  };
};

export default useFirebaseAuth;
