import React, {useContext, useState, useEffect} from "react";
import { AuthContext } from "./AuthProvider";
import '../index.scss';
import { logOut } from "../api/user";

function LogoutButton({classes, ...props}) {
    const {user, setUser} = useContext(AuthContext);
    const [logoutIsOpen, setIsOpen] = useState(false)

    useEffect(() => {  
        document.body.addEventListener('click', () => {
            setIsOpen(false)
        })
    }, [])

    const toggleLogOut = (e) => {
        e.stopPropagation()
        setIsOpen(prev => !prev)
    }

    const signOut = () => {
        logOut();
        setUser(null);
    }

    return (
        <div 
            className={`btn-container ${classes}`} 
            {...props}
            onClick={toggleLogOut}
        >
            <button className="header-button ">{user?.firstName}</button>
            {logoutIsOpen ?
                <>
                    <div className="arrow arrow_logout"></div>
                    <div className="logout" onClick={signOut}>Вийти</div>
                </>
                : ''
            }
        </div>
    )
}

export default LogoutButton;