import React, {createContext, useMemo, useState} from "react";

export const OrderContext = createContext([])

function OrderProvider({children}) {
    const [order, setOrder] = useState([]);

    const data = useMemo(() => {
        return {order, setOrder};
    }, [order])

    return (
        <OrderContext.Provider value={data}>
            {children}
        </OrderContext.Provider>
    )

}

export default OrderProvider;