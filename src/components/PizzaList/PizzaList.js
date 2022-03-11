import React, { useContext } from 'react'
import { PizzaContext } from '../../contexts/pizzaContext'
import PizzaCard from './PizzaCard'
import PizzaListStyling from './PizzaListStyling.module.css'

function PizzaList() {
    const { pizzaData, filteredPizzas } = useContext(PizzaContext)
    let pizzas;
    if (filteredPizzas === null) {
        pizzas = pizzaData.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)
    }
    else if (filteredPizzas.length === 0) {
        pizzas = (<h2>No such pizzas found</h2>)
    }
    else {
        pizzas = filteredPizzas.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)
    }

    return (
        <div className={PizzaListStyling.cardsContainer}>{pizzas}</div>
    )
}

export default PizzaList