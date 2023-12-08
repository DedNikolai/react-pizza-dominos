import React, {useContext} from "react";
import {NavLink } from 'react-router-dom';
import '../styles/header.scss';
import "../index.scss";
import Location from "./Location";
import Language from "./Language";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "./AuthProvider";

function Header() {
    const {user} = useContext(AuthContext);

    return (
        <div className="header-wrapper">
            <div className=" header container">
                <div className="header__side">
                    <div className="header__item header__item_margin-left-none header__item_with-icon">
                        <div className="header__item-icon margin-left-none">
                            <span className="material-icons">call</span>
                        </div>
                        <div>
                            0442221111
                        </div>
                    </div>
                    <Location classes={"locaton header__item header__item_with-icon"} />
                    <NavLink to={'/tracker'} className="header__item">PIZZA TRACKER</NavLink>
                    <NavLink to={'/news'} className="header__item">НОВИНИ</NavLink>
                </div>
                <div className="header__side header__side_left">
                    <Language classes={"header__item header__item_with-icon"}/>
                    {
                        user ?
                        <LogoutButton classes="header__item header__item_margin-right-none" />
                        : 
                        <LoginButton classes="header__item header__item_margin-right-none" />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Header;