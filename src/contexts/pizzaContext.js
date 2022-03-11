import React, { useEffect, useState } from 'react'
const PizzaContext = React.createContext()

function PizzaContextProvider(props) {
    const URL = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68'
    const [pizzaData, setPizzaData] = useState([])
    const [filteredPizzas, setFilteredPizzas] = useState(null)
    function applyFilterToPizzas(filters) {
        const newData = pizzaData.filter((pizza) => {
            let ob = true
            if (filters.isVeg !== '') {
                ob = ob && pizza.isVeg === filters.isVeg
            }
            if (filters.priceRange.minPrice !== '') {
                ob = ob && Number(pizza.price) >= Number(filters.priceRange.minPrice)
            }
            if (filters.priceRange.maxPrice !== '') {
                ob = ob && Number(pizza.price) <= Number(filters.priceRange.maxPrice)
            }
            if (filters.rating !== '') {
                ob = ob && pizza.rating >= Number(filters.rating)
            }
            return ob
        })
        
        setFilteredPizzas(newData)
    }

    function clearAllFilters() {
        setFilteredPizzas(null)
        setPizzaData(pizzaData)
    }

    useEffect(() => {
        fetch(URL).then(res => res.json())
            .then(data => setPizzaData(data))
    }, [])
    return (
        <PizzaContext.Provider
            value={{ pizzaData, filteredPizzas, applyFilterToPizzas, clearAllFilters }}
        >
            {props.children}
        </PizzaContext.Provider>
    )
}

export { PizzaContextProvider, PizzaContext }