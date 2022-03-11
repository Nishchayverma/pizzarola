import React from 'react'
import Header from './components/Header/Header'
import PizzaPage from './pages/PizzaPage'
import CartPage from './pages/CartPage'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { PizzaContextProvider } from './contexts/pizzaContext'
import { CartContextProvider } from './contexts/cartContext'

function App() {
    return (
        <PizzaContextProvider>
            <CartContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<PizzaPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
                <Footer />
            </CartContextProvider>
        </PizzaContextProvider>
    )
}

export default App