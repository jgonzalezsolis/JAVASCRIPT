import React, { useState } from  'react';
    
const Form = (props) => { 
    const [item, setItem] = useState("");
    const { updateToDoList } = props;

    
    const handleSubmit = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        updateToDoList({
            item: item,
            isComplete :false,
            id: Math.floor(Math.random() * 100000000).toString(),
        })
        setItem("");
    };
    
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <input type="text" name="item" value={item} onChange={ (e) => {setItem(e.target.value)}} />
                </div>
                <button>Add item </button>
            </form>
        </div>
    );
}
    
    
export default Form;
