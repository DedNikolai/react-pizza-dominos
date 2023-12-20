import React, { useCallback, useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.scss";
import { OrderContext } from "./OrderProvider";

function Menu() {
    const [emptyOrder, setEmptyOrder] = useState(false);
    const {order} = useContext(OrderContext);
    const quantity = useCallback(() => {
        const data = order.reduce((sum, current) => sum + current.quantity, 0);
        if (data > 9) return data;
        if (data <= 9) return `0${data}`;
        return '00';
    }, [order]);

    const sum = useCallback(() => {
        const data = order.reduce((sum, current) => sum + current.price * current.quantity, 0);
        return data || '';
    }, [order]);

    useEffect(() => {  
        document.body.addEventListener('click', () => {
            setEmptyOrder(false)
        })
    }, [])

    const togglEIsEmpty = (e) => {
        e.stopPropagation();
        setEmptyOrder(prev => {
            return !prev
        })
    };

    return (
        <div className="menu">
            <div className="menu__wrapper">
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
                            <span>{quantity()}</span>
                            <span className="material-icons">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                    <div className="checkout__price">
                        {
                            sum() ? <span>{`${sum()}грн`}</span> : ''
                        }
                    </div>
                    {
                        order.length ?
                            <NavLink to='order'>
                                <div className="checkout__button">Замовити</div>
                            </NavLink> 
                        :
                        <div onClick={togglEIsEmpty} className="checkout__button">
                            Замовити
                            {
                                emptyOrder ?
                                    <div className="checkout__button-modal">Кошик порожній</div>
                                : ''
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;