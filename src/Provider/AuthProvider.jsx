import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

//eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const registerwithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            
                setUser(currentUser)
                setLoading(false)
            
        })
        return ()=>{
            unsubscribe()
        }

    },[])


    const authData = {
        registerwithEmailPassword,
        setUser, 
        user,
        handleGoogleSignIn,
    };
    
    return <AuthContext.Provider value={authData}>
        {children}
        </AuthContext.Provider>
    
};



export default AuthProvider;