import React, { useContext, useState } from 'react'
import PizzaPopUpStyling from './PizzaPopUpStyling.module.css'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from '../../contexts/cartContext'
import HandleCheckBoxes from '../../utils/HandleCheckBoxes';
import HandleRadioBtns from '../../utils/HandleRadioBtns'
import { useNavigate } from "react-router-dom";


function changeNames(items) {

    
    const ob = items.map(item => ({ "name": item.size || item.name }))
    return ob
}

function PizzaPopUp({ openPizzaPopUp, handlePizzaPopUpClose, pizza }) {

    let navigate = useNavigate();
    const { addItemsToCart, decrementQuantity, incrementQuantity, pizzaDetailsToCart } = useContext(CartContext)
    const [toppings, setToppings] = useState(new Array(pizza.toppings[0].items.length).fill(false))
    const [size, setSize] = useState([])


    const quantity = pizzaDetailsToCart.filter(piz => piz.pizza.id === pizza.id)
    const sizesInput = pizza.size[0].isRadio && <HandleRadioBtns
        items={(changeNames(pizza.size[0].items))}
        name={"sizes"}
        toppings={toppings}
        setToppings={setToppings}
        size={size}
        setSize={setSize}
    />

    const toppingsInput = pizza.toppings[0].isRadio ? <HandleRadioBtns
        items={(changeNames(pizza.toppings[0].items))}
        name={"toppings"}
        toppings={toppings}
        setToppings={setToppings}
        size={size}
        setSize={setSize}
    /> : <HandleCheckBoxes
        items={(changeNames(pizza.toppings[0].items))}
        toppings={toppings}
        setToppings={setToppings}
    />

    function handleAddOrder() {
        let toppingsArr = toppings
        if (typeof toppings[0] === "boolean") {
            toppingsArr = pizza.toppings[0].items.map((item, i) => toppings[i] && item.name).filter(item => item !== false)
        }
        const allPizzaItems = { pizza, quantity: quantity[0].quantity, toppings: toppingsArr, size }
        console.log(allPizzaItems)
        addItemsToCart(allPizzaItems)
        handlePizzaPopUpClose()
    }


    return (
        <Modal
            open={openPizzaPopUp}
            onClose={handlePizzaPopUpClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <>
                <div className={PizzaPopUpStyling.mainContainer}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <div className={PizzaPopUpStyling.pizzaName}>{pizza.name}</div>
                        <CloseIcon style={{ cursor: "pointer" }} onClick={handlePizzaPopUpClose} />
                    </div>
                    <hr style={{ marginTop: "20px" }}></hr>

                    <p style={{ fontSize: "20px" }}>Choose size</p>
                    {sizesInput}
                    <p style={{ fontSize: "20px" }}>Choose topping(s)</p>
                    {toppingsInput}

                    <div className={PizzaPopUpStyling.bottomContainer}>
                        <div className={PizzaPopUpStyling.itemCount}>
                            <span
                                className={PizzaPopUpStyling.increDecre}
                                onClick={() => decrementQuantity(pizza.id)}
                            >-</span>
                            {quantity[0] !== undefined && quantity[0].quantity}
                            <span
                                className={PizzaPopUpStyling.increDecre}
                                onClick={() => incrementQuantity(pizza.id)}
                            >+</span>
                        </div>
                        <div onClick={handleAddOrder} className={PizzaPopUpStyling.orderBtn}>Add to Order</div>
                    </div>
                </div>

            </>
        </Modal >

    )
}

export default PizzaPopUp