import React, {useContext, useMemo} from "react";
import { CityContext } from "./CityProvider";
import Cities from "../constants/cities";
import Cookies from "js-cookie";
import '../styles/cityModal.scss'

function CityModal() {
    const {cityModal, setCityModal, city} = useContext(CityContext);
    const cities =  useMemo(() => {
        return Object.keys(Cities).sort(item => Cities[item] === city ? -1 : 1 )
    }, [city])

    const closeModal = () => {
        if (Cookies.get('city')) {
            setCityModal(false)
        }
    }

    if (!cityModal) return <></>

    return (
        <div className="city-modal" onClick={closeModal}>
            <div className="city-modal__container">
                <h2>Де ви знаходитесь?</h2>
                <ul className="cities-list">
                    {cities.map(item => <CityItem key={item.toString()} value={item}/>)}
                </ul>
                <div className="close-modal">
                    <span className="material-icons">close</span>
                </div>
            </div>
        </div>
    )
};

function CityItem({value}) {
    const {city, setCity} = useContext(CityContext);
    const isCurrent = city===Cities[value];

    const choseCity = () => {
        Cookies.set('city', Cities[value])
        setCity(Cities[value]);
    }

    return (
        <li 
            className={`cities-list__item ${isCurrent ? 'cities-list__item_checked' : ''}`}
            onClick={choseCity}
        >
        {isCurrent ? <span className="material-icons">location_on</span> : ''}
         {Cities[value]}
        </li>
    )
}

export default CityModal;