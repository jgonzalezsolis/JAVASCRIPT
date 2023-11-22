import React, { useState } from 'react';
    
const Form = ({pizzaList, setPizzaList}) => {
    const [size, setSize] = useState("");
    const [toppings,setToppings] =  useState("");
    const [isDelivery, setIsDelivery] = useState (false);
    const [possibleToppings] = useState([
        {
            label: "pepperoni",
            value: "pepperoni"
        },
        {
            label: "cheese",
            value: "cheese"
        },
        {
            label: "olives",
            value: "olives"
        },
        {
            label: "pineapple",
            value: "pineapple"
        },
        {
            label: "artichoke",
            value: "artichoke"
        },
    ])
    const newPizzaHandler= e => {
        e.preventDefault();
        const newPizza = {
            size, toppings, isDelivery
        }
        setPizzaList([...pizzaList, newPizza]);
        setIsDelivery(false);
        setSize ("");
        setToppings ("");
    }


    return(
        <form onSubmit={newPizzaHandler}>
            <div>
            {/* <p>{size}</p> */}
                <div>
                    {/* <label>Choose A Size: </label> */}
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="" selected disabled>Choose size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
            {/* <p>{toppings}</p> */}
                <div>
                    <select onChange={e => setToppings(e.target.value)}>
                    <option value="" selected disabled>Choose toppings</option>
                    {
                        possibleToppings.map((topping, index) => {
                            return(
                                <option key={index} value={topping.value}>{topping.label}</option>
                            )
                        }) 
                    }
                    </select>
                </div>
                <div>
                {/* <p>is {isDelivery? <></> : <> not  </>} for delivery</p> */}
                <label >Delivery?</label>
                <input type="checkbox" checked={isDelivery} onChange={e => setIsDelivery(e.target.checked)}/>

                </div>
            </div>
            <button>Order Now</button>
        </form>
    );
}
    
export default Form;