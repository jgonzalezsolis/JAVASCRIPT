
import React, { useState } from  'react';
    
const Form = (props) => { 
    const [item, setItem] = useState("");
    const { updateList} = props;

    const addItem = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        updateList({
            item: item,
            isComplete: false,
            id: Math.floor(Math.random() * 100000000).toString(),
        });
        setItem("");
    };
    
    return(
        <div>
            <form onSubmit={ addItem }>
                <div>
                    <label>item: </label> 
                    <input type="text" name="item" value={item} onChange={(e) => {setItem(e.target.value) }} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};
    
export default Form;
