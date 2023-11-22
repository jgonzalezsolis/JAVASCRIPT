import React, { useState } from 'react';

const Tbs = (props) => {
    const {array, setArray} = useState([])
    const [age, setAge] = useState(props.age); 
    return(
        <div>
            <h1 style={{color:"red"}}>{firstName} , {lastName} </h1>
        </div>
    );
}
export default PersonCard;