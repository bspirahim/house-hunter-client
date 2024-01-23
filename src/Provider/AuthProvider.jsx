import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, 
    //         (loggedInUser)=>{
    //             setUser(loggedInUser)
    //             setLoading(false)
    //         });
    //         return ()=>{
    //             unSubscribe();
    //         };
    // },[])



    const handleLogout = () => {
        console.log("reached logout");
        setUser({});
        localStorage.removeItem("token");
    };


    const authInfo = {
        handleLogout,
        user,
        loading, setUser, setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;