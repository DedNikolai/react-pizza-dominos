import React, {createContext, useMemo, useState} from "react";

export const BurgerContext = createContext(false);

function BurgerProvider({children}) {
    const [isOpen, toggleMenu] = useState(false)

    const burgerMenu = useMemo(() => {
        return {isOpen, toggleMenu}
    }, [isOpen])

    return (
        <BurgerContext.Provider value={burgerMenu}>
            {children}
        </BurgerContext.Provider>
    )
}

export default BurgerProvider;