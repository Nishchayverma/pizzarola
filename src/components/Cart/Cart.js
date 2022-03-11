import React, { useContext, useEffect, useState } from 'react'
import CartStyling from './CartStyling.module.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CartItem from './CartItem'
import { CartContext } from '../../contexts/cartContext'

function Cart() {
    const { cartItems, pizzaDetailsToCart} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    console.log(cartItems)

    console.log(pizzaDetailsToCart)

    useEffect(() => {

        let newTotal = 0
        cartItems.forEach(cartItem => {
            pizzaDetailsToCart.forEach(pizItem => {
                if (pizItem.pizza.id === cartItem.pizza.id) {
                    newTotal = newTotal + cartItem.pizza.price * pizItem.quantity
                }
            })
        })
        setTotalPrice(newTotal)
    }, [pizzaDetailsToCart,cartItems])

    return (
        <main className={CartStyling.mainContainer}>
            {cartItems.length > 0 ? (
                <>
                    <h1 style={{ textAlign: "center" }}>Check out</h1>
                    {cartItems.map((item, i) => <CartItem
                        key={i}
                        pizza={item.pizza}
                        toppings={item.toppings}
                        size={item.size}
                    />
                    )}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                            <div style={{ fontSize: "20px" }}>Total : </div>
                            <CurrencyRupeeIcon style={{ fontSize: "20px" }} />
                            <div style={{ fontSize: "20px" }}>{totalPrice}</div>
                        </div>
                    </div>
                    <div className={CartStyling.placeOrderBtn}> Place Order </div>
                </>

            )
                :
                <h1 style={{ textAlign: "center" }}>No pizzas added to cart</h1>
            }
        </main>
    )
}

export default Cart
