import React, { useContext, Fragment, useCallback, useState } from "react";
import { OrderContext } from "../components/OrderProvider";
import {CityContext} from "../components/CityProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import '../styles/order.scss';
import OredrItem from "../components/OrderItem";

const schema = yup.object({
    city: yup.string().required('Введіть місто').min(2, 'Занадто коротке').max(20, 'Дуже довге'),
    phone: yup.string().required('Введіть телефон').min(2, 'Занадто коротке').max(20, 'Дуже довге'),
}).required();

function Order() {
    const {order, setOrder} = useContext(OrderContext);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const {city} = useContext(CityContext)
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues: {city}
    });

    const onSubMit = data => {
        console.log({data, order});
        reset();
        setOrderConfirmed(true);
        setOrder([])
    };

    const sum = useCallback(() => {
        const data = order.reduce((sum, current) => sum + current.price * current.quantity, 0);
        return data || '';
    }, [order]);

    if (orderConfirmed) {
        return (
            <div className="order-container">
                 <h1 className="title title_red">Дякуємо за замовлення</h1>
            </div>           
        )
    }

    if (order.length === 0) {

        return (
            <div className="order-container">
                 <h1 className="title">Ваш кошик порожній</h1>
            </div>           
        )
    }    


    return (
        <div className="order-container">
            <h1>Кошик</h1>
            <div className="order">
                <div className="order__contacts">
                    <h3>Адреса доставки</h3>
                    <form id='order' className="order-form" onSubmit={handleSubmit(onSubMit)}>
                        <div className="order-form__field">
                            <label 
                                className={`order-form__label ${errors.hasOwnProperty('city') && 'order-form__label_error'}`}
                                htmlFor="city"
                            >
                                {errors.city?.message || "Місто"}
                            </label>
                            <input
                                {...register('city')} 
                                type="text"
                                name="city"
                                placeholder="Ваше місто"
                                className={`order-form__input ${errors.hasOwnProperty('city') && 'order-form__input_error'}`}
                                id="city"
                            />
                        </div>
                        <div className="order-form__field">
                            <label 
                                className={`order-form__label ${errors.hasOwnProperty('phone') && 'order-form__label_error'}`}
                                htmlFor="phone"
                            >
                                {errors.phone?.message || "Номер телефону"}
                            </label>
                            <input
                                {...register("phone")} 
                                type='text'
                                name="phone"
                                placeholder="Номер телефону"
                                className={`order-form__input ${errors.hasOwnProperty('phone') && 'order-form__input_error'}`}
                                id="phone"
                            />
                        </div>
                    </form>
                </div>
                <div className="order-list">
                    <h3>Ваше замовлення</h3>
                    {order.map(item => <OredrItem key={item.id} item={item} />)}
                </div>
            </div>
            {
                sum() ?
                <>
                    <div className="order-sum">Сума до сплати: <span>{`${sum()},00грн`}</span></div>
                        <div className="order-submit">
                            <button form="order" className="order-submit__btn">Оформити замовлення</button>
                    </div>
                </>
                : ''

            }
        </div>

    )
};

export default Order;