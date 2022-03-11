import React,{useState} from 'react'

function HandleRadioBtns({ items, name,toppings,size, setSize, setToppings }) {
    function handleRadioBoxChange(e) {
        if (name === 'sizes') {
            setSize([e.target.value])
        }
        if (name === 'toppings') {
            setToppings([e.target.value])
        }
    }

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            name={item.name}
                            value={item.name}
                            checked={name === 'sizes' ? size[0] === item.name : toppings[0] === item.name}
                            onChange={handleRadioBoxChange}
                        />
                        <div style={{ fontSize: "16px", marginLeft: "5px" }}>{item.name}</div>
                    </div>
                )
            })}
        </>
    )

}
export default HandleRadioBtns