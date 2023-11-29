import React, {useState, useCallback, useEffect} from "react";

function PizzaSorter({pizza, setPizza}) {
    const [sortIsOpen, toggleSort] = useState(false);

    const sortLowToHihg = useCallback(() => {
        let sorted = pizza.sort((a, b) => a.price - b.price);
        setPizza([...sorted])
    }, [pizza]);

    const sortHihgToLow = useCallback(() => {
        let sorted = pizza.sort((a, b) => a.price - b.price).reverse();
        setPizza([...sorted])
    }, [pizza]);

    const toggleSortBox = ((e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleSort(prev => !prev);
    });
    
    useEffect(() => {
        document.body.addEventListener('click', () => {
            toggleSort(false)
        })
    })

    return (
<               div onClick={toggleSortBox}  className="sort">
                    <div>Сортувати</div>
                    <div><span className="material-icons material-icons_big">keyboard_arrow_down</span></div>
                    {
                        sortIsOpen ?
                        (
                            <div className="sort__dropdawn">
                                <div onClick={sortHihgToLow} className="sort__item">Ціна висока-низька</div>
                                <div onClick={sortLowToHihg} className="sort__item">Ціна низька-висока</div>
                            </div> 
                        ) : ''
                    }
                </div>
    )
}

export default PizzaSorter;