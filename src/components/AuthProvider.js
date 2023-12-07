import React, {createContext, useMemo, useState} from "react";
// import { getCurrentUser} from "../services/auth";
// import { useQuery } from "react-query";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    // const {data = null, isFetching} = useQuery('user', getCurrentUser)
    const [user, setUser] = useState({});
    const {isLoading, setIsLoading} = useState(false);
    const [loginModalIsOpen, toggleLogin] = useState(false);
    const [registerModalIsOpen, toggleRegister] = useState(false);

    const auth = useMemo(() => {
        return {user, isLoading, loginModalIsOpen, toggleLogin, registerModalIsOpen, toggleRegister}
    }, [user, isLoading, loginModalIsOpen, registerModalIsOpen])

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider