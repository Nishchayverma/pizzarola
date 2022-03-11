import React, { useContext } from 'react'
import CartStyling from './CartStyling.module.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { CartContext } from '../../contexts/cartContext'
import DeleteIcon from '@mui/icons-material/Delete';


function CartItem({ pizza, toppings, size }) {
    const { pizzaDetailsToCart, incrementQuantity, decrementQuantity, deleteItemfromCart } = useContext(CartContext)
    const allToppings = toppings.join(", ")

    const quantity = pizzaDetailsToCart.filter(piz => piz.pizza.id === pizza.id)

    return <div style={{ display: "flex", marginTop: "50px" }}>
        <img className={CartStyling.imgStyle} src={pizza.img_url} />
        <div className={CartStyling.detailsContainer}>
            <div className={CartStyling.pizzaName}>{pizza.name}</div>
            <div className={CartStyling.sizes}>{size[0]}</div>
           {toppings.length !== 0 && <div className={CartStyling.toppings}>Toppings : {allToppings}</div> }
           <div>
           <div className={CartStyling.quantity}>Quantity</div>
            <div className={CartStyling.itemCount}>
                <span className={CartStyling.increDecre}
                    onClick={() => decrementQuantity(pizza.id)}
                >-</span>
                <span style={{ fontSize: "20px" }}>{quantity[0].quantity}</span>
                <span className={CartStyling.increDecre}
                    onClick={() => incrementQuantity(pizza.id)}
                >+</span>
            </div>
           </div>
           
        </div>
        <div style={{ marginLeft: "auto"}}>
                <div className={CartStyling.pizzaName}> Price</div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <CurrencyRupeeIcon style={{ fontSize: "20px" }} />
                    <div style={{ fontSize: "20px" }}>{pizza.price}</div>
                </div>
            <DeleteIcon onClick={() => deleteItemfromCart(pizza.id)} style={{ color: "#61120E", cursor: "pointer",marginTop:"20px" }} />
        </div>
    </div>;
}

export default CartItem