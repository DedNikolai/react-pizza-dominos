import React, {useContext, useMemo} from "react";
import { LanguageContext } from "./LanguageProvider";
import Cookies from "js-cookie";
import Language from "../constants/langueges"

function Languages() {
    const langueges = useMemo(() => Object.keys(Language), []);
    
    return (
        <>
            <div className="arrow" />
            <div className="language-container">
                {langueges.map(item => <LangItem key={item.toString()} value={item}/>)}
            </div>
        </>
    )
}

function LangItem({value}) {
    const {language, setLanguage} = useContext(LanguageContext);
    const isCurrentLanguge = language===Language[value];
    const chooseLanguge = () => {
        setLanguage(Language[value]);
        Cookies.set('language', Language[value])
    }

    return (
        <div 
            className={`language-container__item ${isCurrentLanguge ? 'language-container__item_checked' : ''}`}
            onClick={chooseLanguge}
        >
            {Language[value]}
        </div>
    )
}

export default Languages;