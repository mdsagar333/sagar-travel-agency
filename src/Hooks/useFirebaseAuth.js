import React, { useState, useEffect } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Redirect } from "react-router";

initializeFirebaseAuth();
const auth = getAuth();

const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [errorAuth, setErrorAuth] = useState("");
  const [userLoading, setUserLoading] = useState(true);

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

  const adminSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const adminSignUp = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
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
    errorAuth,
    userLoading,
    signInWithGoogle,
    logOut,
    adminSignUp,
    adminSignIn,
  };
};

export default useFirebaseAuth;
