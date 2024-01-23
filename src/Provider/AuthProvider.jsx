import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
            axios.post("http://localhost:5000/auth-status", {}, { headers: { authorization: "Bearer " + token } })
                .then(({ data }) => {
                    setUser(data.user);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogout = () => {
        console.log("reached logout");
        setUser(null);
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