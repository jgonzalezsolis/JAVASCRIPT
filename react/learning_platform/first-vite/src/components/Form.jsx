import React, { useState } from 'react';
    
const Form = ({setPerson, personList, setPersonList}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [favoriteCar, setFavoriteCar] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson ={
            firstName,lastName, favoriteCar
        };
        setFirstName("");
        setLastName("");
        setFavoriteCar("");
        // setPerson(newPerson);
        setPersonList([...personList, newPerson])
    };

    const clearHandler = (event) => {
        event.preventDefault();
        setPersonList([]); 
    }
    return(
    <div>
        <form onSubmit={ handleSubmit }>
        <div>
            <label>First Name:</label>
            <input 
            // type="text" 
            // name="firstName"
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value) }
            />
        </div>
        <div>
            <label>Last Name:</label>
            <input 
            // type="text" 
            // name="firstName"
            value={lastName}
            onChange={ (e) => setLastName(e.target.value) }
            />
        </div>
        <div>
            <label>favorite car:</label>
            <input 
            // type="text" 
            // name="firstName"
            value={favoriteCar}
            onChange={ (e) => setFavoriteCar(e.target.value) }
            />
        </div>
        <button>Submit</button>
        <button onClick={clearHandler}>clear</button>
        </form>

    </div>
        );
    }

export default Form;