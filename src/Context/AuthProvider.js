import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const Context = useFirebase();
    return (
        <AuthContext.Provider value={Context}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;