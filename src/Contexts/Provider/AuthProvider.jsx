import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext("");
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const githutbProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider()

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githulogin = () => {
    return signInWithPopup(auth, githutbProvider);
  };

  const FacebookSign = () =>{
    return signInWithPopup(auth, facebookProvider)
  }

  const passwordReset = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        axios.post('http://localhost:5000/jwt', {email : currentUser.email})
        .then(data =>{
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false)
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    createUser,
    signin,
    logOut,
    user,
    googleSignIn,
    githulogin,
    updateUserProfile,
    FacebookSign,
    passwordReset
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
