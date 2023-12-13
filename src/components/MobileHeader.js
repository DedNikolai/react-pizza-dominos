import React, {useContext, useCallback} from "react";
import "../styles/mobileHeader.scss";
import { NavLink } from "react-router-dom";
import Location from "./Location";
import { BurgerContext } from "./BurgerMenuProvider";
import { OrderContext } from "./OrderProvider";

function MobileHeader() {
    const {toggleMenu} = useContext(BurgerContext);
    const {order} = useContext(OrderContext);

    const quantity = useCallback(() => {
        const data = order.reduce((sum, current) => sum + current.quantity, 0);
        return data;
    }, [order]);

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
                {
                    quantity() ?
                    <NavLink to='order'>
                        <div className="mobole-header-list__item">
                            <span className="material-icons material-icons_big">shopping_cart</span>
                            <div className="order-quantity">{quantity()}</div>
                        </div>
                    </NavLink>
                    :
                    <div className="mobole-header-list__item">
                        <span className="material-icons material-icons_big">shopping_cart</span>
                    </div>
                }
                
            </div>
            <div className="mobile-menu">
                <NavLink to='*' className="logo">
                    <div className="mobile-menu__item">Акції</div>
                </NavLink>
                <NavLink to='/pizza' className="logo">
                    <div className="mobile-menu__item">Піца</div>
                </NavLink>
                <NavLink to='*' className="logo">
                    <div className="mobile-menu__item">Напої</div>
                </NavLink>
                <NavLink to='*' className="logo">
                    <div className="mobile-menu__item">Сайди</div>
                </NavLink>               
                <NavLink to='*' className="logo">
                    <div className="mobile-menu__item">Десерти</div>
                </NavLink>           
            </div>
        </div>
    )
}

export default MobileHeader;
