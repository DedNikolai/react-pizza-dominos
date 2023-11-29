import React, { useEffect, useMemo, useState } from "react";
import PizzaItem from "./PizzaItem";
import "../styles/pizza.scss";
import "../styles/filters.scss";
import "react-input-range/lib/css/index.css";
import PizzaFilter from "./PizzaFilter";
import PizzaSorter from "./PizzaSorter";



function PizzaList({pizzas}) {
    const [filterIsOpen, toggleFilter] = useState(false);
    const [pizza, setPizza] = useState(pizzas);

    const toggleFiltertBox = ((e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFilter(prev => !prev);
    })

    useEffect(() => {
        document.body.addEventListener('click', () => {
            toggleFilter(false)
        })
    })

    const data = useMemo(() => pizza, [pizza])

    return (
        <>
            <div className="filters">
                <div onClick={toggleFiltertBox} className="filter">
                    <div><span className="material-icons">filter_alt</span></div> 
                    <div>Фільтр</div>
                </div>
                <PizzaSorter pizza={pizza} setPizza={setPizza} />
            </div>
            {
                filterIsOpen ? <PizzaFilter pizza={pizza} pizzas={pizzas} setPizza={setPizza} /> : ''
            }
            <h1 className="h1-title">Піца</h1>
            <div className="pizza-list">
                {data.map(item => <PizzaItem key={item.id} pizza={item} />)}
            </div>
        </>
    )
}

export default PizzaList;