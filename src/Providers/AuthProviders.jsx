/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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



    const authInfo = {
        user,
        googleSignIn,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;