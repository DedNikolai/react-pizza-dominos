import React, {useMemo} from "react";
import CustomSlider from "../components/CustomSlider";
import PizzaList from "../components/PizzaList";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import { getPizzas } from "../api/pizza";

function Home() {
    const {data = [], isFetching = true} = useQuery('pizzas', getPizzas);

    const pizzas = useMemo(() => {
        return data;
    }, [data])

    const minPrice = Math.min(...data.map(item => item.price))
    const maxPrice = Math.max(...data.map(item => item.price))

    if (isFetching) {
        return <Loader />
    }
    return (
        <>
            <CustomSlider />
            <PizzaList pizzas={pizzas} min={minPrice} max={maxPrice}/>
        </>
    )
};

export default Home;