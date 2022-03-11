import React,{useState} from 'react'

function HandleCheckBoxes({ items, name,toppings, setToppings, setSize }) {
    function handleCheckBoxChange(i) {
        const updatedState = toppings.map((item, index) => index === i ? !item : item)
        setToppings(updatedState)
    }

    return (
        <>
            {items.map((item, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            name={item.name}
                            value={item.name}
                            checked={toppings[index]}
                            onChange={() => handleCheckBoxChange(index)}
                        />
                        <div style={{ fontSize: "16px", marginLeft: "5px" }}>{item.name}</div>
                    </div>
                )
            })}
        </>
    )

}
export default HandleCheckBoxes