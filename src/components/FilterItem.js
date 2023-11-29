import React from "react"
import pizzaTypes from "../constants/pizzaTypes"

function FilterItem({item, func}) {

    const checkItem = (e) => {
        if (e.target.checked) {
            func(prev => {
                return [...prev, e.target.value]
            })   
        } else {
            func(prev => {
                let temp = prev.filter(item => item !== e.target.value)
                return temp
            })               
        }
        
    }
    return (
        <div className="checkbox-list__item">
            <input 
                type="checkbox" 
                className="custom-checkbox" 
                id={item}
                name={item}
                value={pizzaTypes[item]}
                onClick={checkItem} 
            />
            <label 
                className="custom-checkbox-label" 
                htmlFor={item}
            >{pizzaTypes[item]}</label>
        </div>
    )
}

export default FilterItem;