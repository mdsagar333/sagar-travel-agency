import React, { useState, useEffect } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Redirect } from "react-router";

initializeFirebaseAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [userLoading, setUserLoading] = useState(true);

  console.log(user, user?.uid);
  const auth = getAuth();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .catch((err) => {
    //   setError(err.message);
    // })
    // .finally(() => {
    //   setUserLoading(false);
    // });
  };

  const logOut = () => {
    setUserLoading(true);
    signOut(auth).then(() => {
      setUser(null);
      setUserLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
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
