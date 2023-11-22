import React, { useState } from 'react';
    
const Display= (props) => {
    const {toDoList, deleteItem, handleCompleted} = props;

    
    return(
        <div>
            {
                toDoList.map((item, index) => (
                    <div key= {item.id}>
                        <p className={item.isComplete? "completed" : ""}>{item.item}</p>
                        <input type="checkbox" onChange={() => handleCompleted(item)} />
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                    )
                    
                )
            }
        </div>
    );
}
    
export default Display;