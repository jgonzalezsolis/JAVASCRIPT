import React, { useState } from 'react';
    
const PersonCard = ({ personList}) => {
    const showPersonList =(personList) => {
        if (personList.length>0){
                return personList.map((person, index) => (
                    <div key={index}>
                        <h3>{person.lastName}, {person.firstName}</h3>
                        <p>Favorite Car: {person.favoriteCar}</p>
                    </div>
                ));
            } else {
                return <p></p>;
            }
        }
    
    return(
        <div>
            {
                showPersonList(personList)
                // person ?
                //     <><h3>{person.lastName}, {person.firstName}</h3>
                //     <p>Favorite Car: {person.favoriteCar}</p></>: <></>
            }
        </div>
        );
    }
export default PersonCard;