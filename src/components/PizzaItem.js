
import React, {useState, useEffect, memo} from "react";
import * as TYPES from "../constants/pizza";
import "../styles/pizza.scss";

const defaultState = {
    size: TYPES.size.STANDART,
    dough: TYPES.dough.FAT,
    board: null
}

function PizzaItem({pizza}) {
    const [params, setParams] = useState(defaultState)

    useEffect(() => {
        document.body.querySelector(`#pizza${pizza.id}`).addEventListener('click', e => {
          let nodes = e.target.parentElement.querySelectorAll('.pizza-type__item');
          [].forEach.call(nodes, item => item.classList.remove('pizza-type__item_checked')); 
           e.target.classList.add('pizza-type__item_checked');
           setParams(prev => {
            let prop = e.target.dataset.name;
            let value = e.target.dataset.value
            prev[prop] = value
            return prev
           })
        })
    }, [])

    const addToCard = () => {
        console.log({...pizza, ...params})
    }

    return (
        <div className="pizza-list__item">
            <img className="pizza-list__item-img" src={pizza.img} />
            <div className="pizza-list__item-content">
                <div className="pizza-list__item-header">
                    <div className="pizza-list__item-title">{pizza.name}</div>
                    <div className="pizza-list__item-description">{pizza.descrirpion}</div>
                </div>
                <div id={`pizza${pizza.id}`}>
                    <div className="pizza-type">
                        <div data-name='size' data-value={TYPES.size.STANDART} className="pizza-type__item pizza-type__item_checked">{TYPES.size.STANDART}</div>
                        <div data-name='size' data-value={TYPES.size.BIG} className="pizza-type__item">{TYPES.size.BIG}</div>
                        <div data-name='size' data-value={TYPES.size.EXTRA} className="pizza-type__item">{TYPES.size.EXTRA}</div>
                        <div data-name='size' data-value={TYPES.size.SUPER} className="pizza-type__item pizza-type__item_large">{TYPES.size.SUPER}</div>
                    </div>
                    <div className="pizza-type">
                        <p className="pizza-type-text">Тісто</p>
                        <div data-name='dough' data-value={TYPES.dough.FAT} className="pizza-type__item pizza-type__item_medium pizza-type__item_checked">{TYPES.dough.FAT}</div>
                        <div data-name='dough' data-value={TYPES.dough.THIN} className="pizza-type__item pizza-type__item_medium">{TYPES.dough.THIN}</div>
                    </div>
                    <div className="pizza-type">
                        <p className="pizza-type-text">Борт</p>
                        <div data-name='board' data-value={TYPES.board.CHEESE} className="pizza-type__item pizza-type__item_medium">{TYPES.board.CHEESE}</div>
                        <div data-name='board' data-value={TYPES.board.MEET} className="pizza-type__item pizza-type__item_medium">{TYPES.board.MEET}</div>
                    </div>
                </div>
                <div className="pizza-list__item-bottom">
                    <div className="pizza-type__item-price">{`${pizza.price}.00 грн`}</div>
                    <div>
                        <div className="order-btn">
                            <div><span className="material-icons">shopping_cart</span></div>
                            <div onClick={addToCard} className="order-btn__text">В кошик</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(PizzaItem);