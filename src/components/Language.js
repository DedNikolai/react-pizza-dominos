import React, {useState, useContext, useEffect} from "react";
import Languages from "./Langueges";
import { LanguageContext } from "./LanguageProvider";

function Language({classes, ...props}) {
    const [isLanguageIcon, setIsLanguageIcon] = useState(false);
    const {language} = useContext(LanguageContext);

    useEffect(() => {  
        document.body.addEventListener('click', () => {
            setIsLanguageIcon(false)
        })
    }, [])

    const toggleLanguege = (e) => {
        e.stopPropagation()
        setIsLanguageIcon(prev => {
            return !prev
        })
    };

    return (
        <div
            {...props }
            className={`language ${classes}`} 
            onClick={toggleLanguege}
        >
            <div>
                {language}
            </div>
            <div className="header__item-icon margin-left-none">
                <span className="material-icons">keyboard_arrow_down</span>
            </div>
                {isLanguageIcon ? <Languages /> : ''}
        </div>
    )
}

export default Language;