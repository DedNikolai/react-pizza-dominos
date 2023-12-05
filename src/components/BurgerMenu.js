import React, {useContext, useEffect} from "react";
import '../styles/burgerMenu.scss';
import Language from "./Language";
import Location from "./Location";
import LoginButton from "./LoginButton";
import { NavLink } from "react-router-dom";
import { BurgerContext } from "./BurgerMenuProvider";

function BurgerMenu() {
    const {isOpen, toggleMenu} = useContext(BurgerContext);

    useEffect(() => {
        document.body.querySelector('.burger-navigation').addEventListener('click', () => {
            toggleMenu(false)
        });
        document.body.querySelector('.burger-menu__logo').addEventListener('click', () => {
            toggleMenu(false)
        })
    }, [])
    
    return (
        <div className={`burger-menu ${isOpen ? "burger-menu_open" : ''}`}>
            <div className="burger-menu__container">
                <div className="burger-menu__header">
                    <div className="burger-menu__logo">
                        <NavLink to='/'>
                            <img className="mini-logo" src="./img/mini-logo.png"/>
                            <span>Dominos Pizza</span>
                        </NavLink>
                    </div>
                    <div className="burger-menu__language">
                        <Language classes={"burger-menu__close-icon"}/>
                        <div onClick={() => toggleMenu(false)}>
                            <span className="material-icons material-icons_big">close</span>
                        </div>
                    </div>
                </div>
                <div className="burger-menu__header burger-menu__header_margin">
                    <div className="burger-menu__logo">
                        <Location />
                    </div>
                    <div className="burger-menu__language">
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div className="burger-menu__header">
                <ul className="burger-navigation">
                    <NavLink to='*'><li className="burger-navigation__item">Акція</li></NavLink>
                    <NavLink to='/pizza'><li className="burger-navigation__item">Піца</li></NavLink>
                    <NavLink to='*'><li className="burger-navigation__item">Напої</li></NavLink>
                    <NavLink to='*'><li className="burger-navigation__item">Сайди</li></NavLink>
                    <NavLink to='*'><li className="burger-navigation__item">Десерти</li></NavLink>  
                </ul>
            </div>
        </div>
    )
}


export default BurgerMenu;