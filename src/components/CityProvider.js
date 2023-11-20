import React, {createContext, useMemo, useState, useEffect} from "react";
import Cookies from "js-cookie";
import City from '../constants/cities';

export const CityContext = createContext();

function CityProvider({children}) {
    const [city, setCity] = useState(City.KYIV);
    const [cityModal, setCityModal] = useState(false);

    useEffect(() => {
        const current = Cookies.get('city')
        if (current) {
            setCityModal(false)
            setCity(current)
        } else {
            setCityModal(true)
            setCity(null)
        }
    }, [])

    const context = useMemo(() => {
        return {city, setCity, cityModal, setCityModal};
    }, [city, setCity, cityModal, setCityModal])

    return (
        <CityContext.Provider value={context}>
            {children}
        </CityContext.Provider>
    )
}

export default CityProvider;