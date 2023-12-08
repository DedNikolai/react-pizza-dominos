import React, {useContext} from "react";
import { AuthContext } from "./AuthProvider";

function LoginButton({classes, ...props}) {
    const {toggleLogin} = useContext(AuthContext);

    return (
        <div 
            className={classes} 
            {...props}
            onClick={() => toggleLogin(true)}
        >
            <button className="header-button">Увійти</button>
        </div>
    )
}

export default LoginButton;