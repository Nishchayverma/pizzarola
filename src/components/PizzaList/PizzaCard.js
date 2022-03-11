import React from 'react'
import PizzaCardStyling from './PizzaCardStyling.module.css'
import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';

import PizzaPopUp from './PizzaPopUp';

function Pizza(props) {
    const [openPizzaPopUp, setOpenPizzaPopUp] = React.useState(false);

    function handlePizzaPopUpOpen() {
        setOpenPizzaPopUp(true)
    }


    function handlePizzaPopUpClose() {
        setOpenPizzaPopUp(false)
    }
    return (
        <div className={PizzaCardStyling.pizzaCard}>
            <img className={PizzaCardStyling.pizzaImg} src={props.img_url} />
            <div className={PizzaCardStyling.nameRatingStyling}>
                <div className={PizzaCardStyling.pizzaName}>{props.name}</div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: "16px" }}>{props.rating}</div>
                    <StarIcon style={{ fontSize: "18px", color: "#ECA442" }} />
                </div>
            </div>
            <div className={PizzaCardStyling.priceTypeStyling}>
                <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
                <div style={{ fontSize: "16px" }}>{props.price}</div>
                <div style={{ fontSize: "16px", marginLeft: "auto" }}>{props.isVeg ? "Veg" : "Non Veg"}</div>
            </div>
            <div style={{ fontSize: "16px", marginTop: "5px" }}>{props.description}</div>
            <div className={PizzaCardStyling.btnContainer}>
                <div className={PizzaCardStyling.btn} onClick={handlePizzaPopUpOpen}>
                    Add
                </div>
            </div>

            <PizzaPopUp
                pizza={props}
                openPizzaPopUp={openPizzaPopUp}
                handlePizzaPopUpClose={handlePizzaPopUpClose}
            />
        </div >
    )
}

export default Pizza