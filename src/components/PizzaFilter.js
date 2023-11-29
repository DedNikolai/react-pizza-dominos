import React, {useState} from "react";
import InputRange from 'react-input-range';
import pizzaTypes from "../constants/pizzaTypes";
import FilterItem from "./FilterItem";

function PizzaFilter({pizza, setPizza, pizzas}) {
    const min = Math.min(...pizzas.map(item => item.price))
    const max = Math.max(...pizzas.map(item => item.price))

    const [interval, setInterval] = useState({ min, max });
    const [filters, setFilters] = useState([])

    const changeInterval = (value) => {
        setInterval({...value})
    }

    const stoEevent = (e) => {
        e.stopPropagation();
    }

    const filterData = () => {
        const filtered = pizza.filter(item => item.price >= interval.min && item.price <= interval.max)
                         .filter(item => {
                            let temp = item.types.split(',');
                            let set = new Set([...temp, ...filters])
                            return temp.length === set.size    
                        
                         })   
        setPizza([...filtered])
    }

    const clearFilter = () => {
        setPizza(pizzas);
        setInterval({min, max});
        setFilters([]);
        let nodes =  document.body.querySelectorAll('.custom-checkbox');
        [].forEach.call(nodes, item => item.checked = false)
    }


    return (
        <div onClick={stoEevent} className="filter-dropdawn">
            <div className="filter-dropdawn__container">
                <div className="filter-dropdawn__side filter-dropdawn__side_small">
                    <h3>Фільтр</h3>
                    <p>Ціна</p>
                    <div className="input-range-container">
                        <InputRange
                            maxValue={max}
                            minValue={min}
                            value={interval}
                            onChange={changeInterval} 
                       />
                    </div>
                </div>
            <div className="filter-dropdawn__side">
                <div className="checkbox-list">
                    {Object.keys(pizzaTypes).map(key => {
                        return <FilterItem key={key} item={key} func={setFilters}/>
                    })}
                </div>
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
}

export default PizzaFilter;