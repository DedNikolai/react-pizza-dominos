import React, {createContext, useEffect, useMemo, useState} from "react";
import { getCurrentUser } from "../api/user";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState({});
    const {isLoading, setIsLoading} = useState(false);
    const [loginModalIsOpen, toggleLogin] = useState(false);
    const [registerModalIsOpen, toggleRegister] = useState(false);

    useEffect(() => {
        getCurrentUser().then(res => {
            setUser(res)
        })
    }, [])

    const auth = useMemo(() => {
        return {user, isLoading, loginModalIsOpen, toggleLogin, 
            registerModalIsOpen, toggleRegister, setUser}
    }, [user, isLoading, loginModalIsOpen, registerModalIsOpen])

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider