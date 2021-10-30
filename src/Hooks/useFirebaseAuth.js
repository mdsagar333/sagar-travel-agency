import React, { useState, useEffect } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeFirebaseAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [userLoading, setUserLoading] = useState(true);

  console.log(user);
  const auth = getAuth();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        setError("There was something wrong, please try again later.");
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setUserLoading(false);
      return () => unsubscribed;
    });
  }, []);
  return {
    user,
    error,
    userLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebaseAuth;
