// import React, { useState } from  'react';
    
const Display = (props) => { 
    
    const {toDoList, deleteButton, handleCompleted} = props;

    return (
        <>
        {
        toDoList.map((toDo, index) =>(
            <div key={toDo.id}> 
                <p className={toDo.isComplete? "completed" : ""}>{toDo.item}</p>
                <input type="checkbox" onChange={()=> handleCompleted (toDo)}/>
                <button onClick={() => deleteButton(toDo.id)}>Delete</button>

            </div>
        ))
        }
        </>
    );
};
    
export default Display;
