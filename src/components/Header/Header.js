import React,{useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import logo from '../../assests/images/logo.png'
import headerStyling from './HeaderStyling.module.css'
import { Link } from 'react-router-dom'
import Filter from '../Filters/Filter'
import {CartContext} from '../../contexts/cartContext'

function Header() {
    const [openFilters, setOpenFilters] = React.useState(false)
    const {cartItems} = useContext(CartContext)
    function handleOpenFilters() {
        setOpenFilters(true)
    }

    function handleCloseFilters() {
        setOpenFilters(false)
    }
    return (
        <div className={headerStyling.nav}>
            <img src={logo} className={headerStyling.logo} />
            <h1 className={headerStyling.brandName}>Pizzarola</h1>
            <ul className={headerStyling.linkContainer}>
                <Link to="/" className={headerStyling.headerLinks}>Home</Link>
                <li onClick={handleOpenFilters} className={headerStyling.headerLinks}>Filters</li>
                <Link to="/cart" className={headerStyling.headerLinks} style={{position:"relative"}}>
                    Cart
                    {cartItems.length > 0 && <span className={headerStyling.activeCart}> {cartItems.length}</span>}
                    </Link>
            </ul>
            <Filter
                openFilters={openFilters}
                handleCloseFilters={handleCloseFilters}
            />
        </div>
    )
}

export default Header