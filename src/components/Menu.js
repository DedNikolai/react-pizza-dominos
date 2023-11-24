import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.scss"

function Menu() {
    return (
        <div className="menu">
            <div className="navigation">
                <NavLink to='/' className="logo">
                    <img src="./img/blue-logo.avif"/>
                </NavLink>
                <ul className="nav">
                    <NavLink to='*'><li className="nav__item">Акція</li></NavLink>
                    <NavLink to='/pizza'><li className="nav__item">Піца</li></NavLink>
                    <NavLink to='*'><li className="nav__item">Напої</li></NavLink>
                    <NavLink to='*'><li className="nav__item">Сайди</li></NavLink>
                    <NavLink to='*'><li className="nav__item">Десерти</li></NavLink>                                      
                </ul>
            </div>
            <div className="checkout">
                <div className="checkout__order">
                    <div className="checkout__order-container">
                        <span>00</span> 
                        <span className="material-icons">
                            shopping_cart
                        </span>
                    </div>
                </div>
                <div className="checkout__price">
                    {/* <span>650,00грн</span> */}
                </div>
                <div className="checkout__button">Замовити</div>
            </div>
        </div>
    )
}

export default Menu;