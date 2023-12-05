import React, {useContext} from "react";
import "../styles/mobileHeader.scss";
import { NavLink } from "react-router-dom";
import Location from "./Location";
import { BurgerContext } from "./BurgerMenuProvider";

function MobileHeader() {
    const {toggleMenu} = useContext(BurgerContext)

    return (
        <div className="mobole-header">
            <div className="mobole-header-list">
                <div className="mobole-header-list__item">
                    <div className="burger" onClick={() => toggleMenu(true)}>
                        <div className="burger__item"></div>
                        <div className="burger__item"></div>
                        <div className="burger__item"></div>
                    </div>
                </div>
                <div className="mobole-header-list__item">
                    <NavLink to='/' className="logo">
                        <img className="mini-logo" src="./img/mini-logo.png"/>
                    </NavLink>
                    <Location />
                </div>
                <div className="mobole-header-list__item">
                    <span className="material-icons material-icons_big">shopping_cart</span>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="mobile-menu__item">Акції</div>
                <div className="mobile-menu__item">Піца</div>
                <div className="mobile-menu__item">Напої</div>
                <div className="mobile-menu__item">Сайди</div>
                <div className="mobile-menu__item">Десерти</div>
            </div>
        </div>
    )
}

export default MobileHeader;
