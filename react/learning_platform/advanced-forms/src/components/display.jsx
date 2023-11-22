import React, { useState } from 'react';
    
const Display = ({pizzaList}) => {
    return(
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Toppings</th>
                        <th>Delivery or Carryout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pizzaList.map((pizza, index) => {
                            return(
                                <tr key={index}>
                                    <td>{pizza.size}</td>
                                    <td>{pizza.toppings}</td>
                                    <td>{pizza.isDelivery ? "Delivery" : "Carryout"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    );
}
    
export default Display;