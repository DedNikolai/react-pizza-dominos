import React, { useCallback, useEffect, useMemo, useState } from "react";
import PizzaItem from "./PizzaItem";
import InputRange from 'react-input-range';
import "../styles/pizza.scss";
import "../styles/filters.scss";
import "react-input-range/lib/css/index.css"


function PizzaList({pizzas, min, max}) {
    const [sortIsOpen, toggleSort] = useState(false);
    const [filterIsOpen, toggleFilter] = useState(false);
    const [pizza, setPizza] = useState(pizzas);
    const [interval, setInterval] = useState({ min, max })

    const changeInterval = (value) => {
        setInterval({...value})
    }

    const toggleSortBox = ((e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleSort(prev => !prev);
    })

    const toggleFiltertBox = ((e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFilter(prev => !prev);
    })

    useEffect(() => {
        document.body.addEventListener('click', () => {
            toggleSort(false)
            toggleFilter(false)
        })
    })

    const sortLowToHihg = useCallback(() => {
        let sorted = pizza.sort((a, b) => a.price - b.price);
        setPizza([...sorted])
    }, [pizza])

    const sortHihgToLow = useCallback(() => {
        let sorted = pizza.sort((a, b) => a.price - b.price).reverse();
        setPizza([...sorted])
    }, [pizza])

    const filterData = () => {
        const filtered = pizza.filter(item => item.price >= interval.min && item.price <= interval.max)
        console.log(filtered)
        setPizza([...filtered])
    }

    const clearFilter = () => {
        setPizza(pizzas)
        setInterval({min, max})
    }

    const data = useMemo(() => pizza, [pizza])

    return (
        <>
            <div className="filters">
                <div onClick={toggleFiltertBox} className="filter">
                    <div><span className="material-icons">filter_alt</span></div> 
                    <div>Фільтр</div>
                </div>
                <div onClick={toggleSortBox}  className="sort">
                    <div>Сортувати</div>
                    <div><span className="material-icons material-icons_big">keyboard_arrow_down</span></div>
                    {
                        sortIsOpen ?
                        (
                            <div className="sort__dropdawn">
                                <div onClick={sortHihgToLow} className="sort__item">Ціна висока-низька</div>
                                <div onClick={sortLowToHihg} className="sort__item">Ціна низька-висока</div>
                            </div> 
                        ) : ''
                    }
                </div>
            </div>
            {
                filterIsOpen ?
                (
                    <div className="filter-dropdawn">
                        <div className="filter-dropdawn__container">
                            <div className="filter-dropdawn__side filter-dropdawn__side_small">
                                <h3>Фільтр</h3>
                                <p>Ціна</p>
                                <div>
                                    <InputRange
                                        maxValue={max}
                                        minValue={min}
                                        value={interval}
                                        onChange={changeInterval} 
                                    />
                                </div>
                            </div>
                            <div className="filter-dropdawn__side">
                                Чекбокси
                            </div>
                        </div>
                        <div className="filter-dropdawn__bottom">
                            <div>
                                <button 
                                    className="filter-dropdawn__btn filter-dropdawn__btn_grey"
                                    onClick={clearFilter}
                                >
                                    Очистити
                            </button>
                            </div>
                            <div>
                                <button 
                                    className="filter-dropdawn__btn"
                                    onClick={filterData}
                                >
                                    Фільтрувати
                                </button>
                            </div>
                        </div>
                    </div> 
                )
                : ''
            }
            <h1 className="h1-title">Піца</h1>
            <div className="pizza-list">
                {data.map(item => <PizzaItem key={item.id} pizza={item} />)}
            </div>
        </>
    )
}

export default PizzaList;