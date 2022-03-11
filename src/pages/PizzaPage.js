import React from 'react'
import Filters from '../components/Filters/Filter'
import PizzaList from '../components/PizzaList/PizzaList'
import PizzaPageStyling from './PizzaPageStyling.module.css'

function pizzaPage() {
  return (
    <div className={PizzaPageStyling.pageContainer}>
      <Filters />
      <PizzaList />
    </div>
  )
}

export default pizzaPage