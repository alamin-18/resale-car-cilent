import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext =createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // setLoading(false);
        });

        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        setUser,
        createUser,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;