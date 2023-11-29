import React, {useMemo, useState, useEffect} from "react";
import PizzaList from "../components/PizzaList";
import Loader from "../components/Loader";
import { getPizzas } from "../api/pizza";


function Pizza() {
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        getPizzas().then(res => setData(res))
                   .finally(() => setIsFetching(false))
    }, [])

    const pizzas = useMemo(() => {
        return data;
    }, [data])


    if (isFetching) {
        return <Loader />
    }
    return (
        <>
            <PizzaList pizzas={pizzas} />
        </>
    )
};

export default Pizza;