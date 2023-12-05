import React from "react";

function LoginButton({classes, ...props}) {
    return (
        <div className={classes} {...props}>
            <button className="header-button">Увійти</button>
        </div>
    )
}

export default LoginButton;