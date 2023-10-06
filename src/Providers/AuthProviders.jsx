/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    // authProviders 
    const googleAuthProvider = new GoogleAuthProvider();

    // google Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        signOut(auth)
    }
    
    // observe account
    useEffect(()=> {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return ()=> unSubScribe()
    },[])


    const authInfo = {
        user,
        googleSignIn,
        createUser,
        logInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;