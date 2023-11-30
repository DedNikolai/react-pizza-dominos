import React, {useState, useEffect, useContext} from "react";
import {NavLink } from 'react-router-dom';
import Languages from "./Langueges";
import { LanguageContext } from "./LanguageProvider";
import '../styles/header.scss';
import "../index.scss";
import Location from "./Location";

function Header() {
    const [isLanguageIcon, setIsLanguageIcon] = useState(false);
    const {language} = useContext(LanguageContext);

    
    const toggleLanguege = (e) => {
        e.stopPropagation()
        setIsLanguageIcon(prev => {
            return !prev
        })
    };

    useEffect(() => {  
        document.body.addEventListener('click', () => {
            setIsLanguageIcon(false)
        })
    }, [])

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
                    <div 
                        className="header__item header__item_with-icon"
                        onClick={toggleLanguege}
                    >
                        <div>
                        {language}
                        </div>
                        <div className="header__item-icon margin-left-none">
                            <span className="material-icons">keyboard_arrow_down</span>
                        </div>
                        {isLanguageIcon ? <Languages /> : ''}
                    </div>
                    <div className="header__item header__item_margin-right-none"><button className="header__button">Увійти</button></div>
                </div>
            </div>
        </div>
    )
}

export default Header;