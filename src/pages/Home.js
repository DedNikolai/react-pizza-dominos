import React, {useEffect, useMemo, useState} from "react";
import CustomSlider from "../components/CustomSlider";
import PizzaList from "../components/PizzaList";
import Loader from "../components/Loader";
import { getPizzas } from "../api/pizza";

function Home() {
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
            <CustomSlider />
            <PizzaList pizzas={pizzas} />
        </>
    )
};

export default Home;