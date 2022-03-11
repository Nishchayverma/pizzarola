import React, { useState, useContext, createContext, useEffect } from 'react'
import { PizzaContext } from './pizzaContext'
const CartContext = createContext()

function CartContextProvider(props) {
    const { pizzaData } = useContext(PizzaContext)
    const [cartItems, setCartItems] = useState([])
    function initializeCart() {
        let pizzaCart = pizzaData?.map(pizza => {
            return {
                pizza: pizza,
                quantity: 1,
                toppings: [],
                sizes: []
            }
        })
        return pizzaCart
    }

    const [pizzaDetailsToCart, setPizzaDetailsToCart] = useState({})
    useEffect(() => {
        const data = initializeCart()
        setPizzaDetailsToCart(data)
    }, [pizzaData])

    function incrementQuantity(pizzaId) {
        setPizzaDetailsToCart(prev =>
            prev.map(piz => piz.pizza.id === pizzaId ? { ...piz, quantity: piz.quantity + 1 } : piz)
        )
    }
    function decrementQuantity(pizzaId) {
        setPizzaDetailsToCart(prev =>
            prev.map(piz => piz.pizza.id === pizzaId && piz.quantity >=2 ? { ...piz, quantity: piz.quantity - 1 } : piz)
        )
    }
    function addItemsToCart(allPizzaItems) {
        setCartItems(prev => [...prev,allPizzaItems])
    }

    function deleteItemfromCart(pizzaId){
        setCartItems(prev => prev.filter(item => item.pizza.id !== pizzaId))
    }


    console.log(pizzaDetailsToCart)
    return (
        <CartContext.Provider value={{ cartItems, addItemsToCart, deleteItemfromCart,incrementQuantity, decrementQuantity, pizzaDetailsToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }
