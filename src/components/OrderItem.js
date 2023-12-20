import React, {useContext} from "react";
import { OrderContext } from "../components/OrderProvider";

function OredrItem({item}) {
    const {order, setOrder} = useContext(OrderContext);

    const minusQuantity = () => {
        const data = order.find(pizza => pizza.id === item.id);
        const temp = order.filter(pizza => pizza.id !== item.id);
        if (data.quantity === 1) {
            setOrder([...temp])
        } else {
            data.quantity -= 1;
            setOrder([...temp, data])
        }
    }

    const addQuantity = () => {
        const data = order.find(pizza => pizza.id === item.id);
        const temp = order.filter(pizza => pizza.id !== item.id);
        data.quantity += 1;
        setOrder([...temp, data])
    }

    const deleteItem = () => {
        const temp = order.filter(pizza => pizza.id !== item.id);
        setOrder([...temp])
    }

    return (
        <div className="order-list__item">
            <div className="order-list__img-container">
                <img src="./img/pizza1.avif"/>
            </div>
            <div className="order-list__details">
                <div className="item-title">{item.name}</div>
                <div className="item-despription">{item.descrirpion}</div>
                <div className="item-params">{`${item?.size}, ${item?.dough}, ${item.board}`}</div>
                <div className="item-changes">
                    <div className="item-change-btn">
                        <div onClick={minusQuantity} className="order-btn__count">-</div>
                        <div>{item.quantity}</div> 
                        <div onClick={addQuantity} className="order-btn__count">+</div>
                    </div>
                    <div className="item-price">{`${item.price},00грн`}</div>
                    <div onClick={deleteItem} className="item-delete">
                        <span className="material-icons">delete</span>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default OredrItem;