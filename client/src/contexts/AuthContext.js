import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

const initialState = {
    _id: '',
    username: '',
}
export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const storedAdmin = localStorage.getItem('admin');
        return storedAdmin ? JSON.parse(storedAdmin) : initialState;
    });

    const onLogin = (authData) => {
        setAdmin(authData);
        localStorage.setItem('admin', JSON.stringify(authData));
    }
    const onLogout = () => {
        setAdmin(initialState);
        localStorage.removeItem('admin');
    }

    return (
        <AuthContext.Provider value={{ onLogin, admin, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const authResult = useContext(AuthContext);

    return authResult
        ;
}