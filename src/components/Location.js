import React, {useContext} from "react";
import { CityContext } from "./CityProvider";
import "../styles/location.scss";

function Location({classes, ...props}) {
    const {city, setCityModal} = useContext(CityContext);

    return (
        <div 
            {...props}
            onClick={() => setCityModal(true)}
            className={`location ${classes}`}
        >
            <div className="header__item-icon">
                <span className="material-icons">location_on</span>
            </div>
            <div>
                {city}
            </div>
        </div>
    )
}

export default Location;