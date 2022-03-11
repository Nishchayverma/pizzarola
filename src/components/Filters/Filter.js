import React, { useState, useContext } from 'react'
import FilterStyle from './FilterStyling.module.css'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Close from '@mui/icons-material/Close';
import { PizzaContext } from '../../contexts/pizzaContext'

function Filter({ openFilters, handleCloseFilters }) {

  const [isVeg, setIsVeg] = useState('')
  const [price, setPrice] = useState({
    minPrice: '',
    maxPrice: ''
  })
  const [rating, setRating] = useState('')
  function handlePriceChange(e) {
    setPrice(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  function handleRatingChange(e) {
    setRating(e.target.value)
  }

  function handleVeg() {
    setIsVeg(prev => prev === '' || prev === 'NonVeg' ? 'Veg' : '')
  }
  function handleNonVeg() {
    setIsVeg(prev => prev === '' || prev === 'Veg' ? 'NonVeg' : '')
  }
  const { applyFilterToPizzas, clearAllFilters } = useContext(PizzaContext)

  function handleApplyFilters() {
    let veggieCheck = ''
    if(isVeg !== ''){
      veggieCheck = isVeg === 'Veg' ? true : false
    }
    const allFilters = {
      isVeg: veggieCheck,
      priceRange: price,
      rating: rating
    }
    console.log(allFilters)
    applyFilterToPizzas(allFilters)
    handleCloseFilters()
  }

  function handleClearFilter() {
    setIsVeg('')
    setPrice({
      minPrice: '',
      maxPrice: ''
    })
    setRating('')
    clearAllFilters()
    handleCloseFilters()
  }

  return (
    <Modal
      open={openFilters}
      onClose={handleCloseFilters}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={FilterStyle.mainContainer}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={FilterStyle.heading}>Filters</div>
          <CloseIcon style={{ cursor: "pointer" }} onClick={handleCloseFilters} />
        </div>
        <hr style={{ marginTop: "10px", marginBottom: "20px" }} />
        <div style={{ fontSize: "20px" }}>Choose Category</div>

        <div style={{ display: "flex" }}>
          <div
            className={FilterStyle.categories}
            style={isVeg === 'Veg' ? { cursor: "pointer", background: "#ECA442" } : { cursor: "pointer" }}
            onClick={handleVeg}
          >Veg</div>
          <div
            className={FilterStyle.categories}
            style={isVeg === 'NonVeg' ? { cursor: "pointer", background: "#ECA442" } : { cursor: "pointer" }}
            onClick={handleNonVeg}
          >Non Veg</div>
        </div>
        <div style={{ fontSize: "20px" }}>Price Range</div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <input
            className={FilterStyle.categories}
            name="minPrice"
            placeholder="Min"
            value={price.minPrice}
            onChange={handlePriceChange}
          />
          <div style={{ fontSize: "30px", marginRight: "10px" }}>-</div>
          <input
            className={FilterStyle.categories}
            name="maxPrice"
            placeholder="Max"
            value={price.maxPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div style={{ fontSize: "20px" }}>Rating</div>
        <span> <input
          style={{ display: "inline" }}
          className={FilterStyle.categories}
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        />/ 5</span>


        <div className={FilterStyle.bottomContainer}>
          <div className={FilterStyle.clearFilters} onClick={handleClearFilter}>
            Clear Filters
          </div>
          <div className={FilterStyle.applyFilters} onClick={handleApplyFilters}>
            Apply Filters
          </div>
        </div>

      </div>

    </Modal>

  )
}

export default Filter