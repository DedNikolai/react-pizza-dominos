import React, {createContext, useMemo, useState, useEffect} from "react";
import Language from "../constants/langueges"
import Cookies from "js-cookie";

export const LanguageContext = createContext();

function LanguageProvider({children}) {
    const [language, setLanguage] = useState(Language.UKRAINE)

    useEffect(() => {
        const current = Cookies.get('language')
        if (current) {
            setLanguage(current)
        }
    }, [])

    const context = useMemo(() => {
        return {language, setLanguage}
    }, [language, setLanguage])

    return (
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;