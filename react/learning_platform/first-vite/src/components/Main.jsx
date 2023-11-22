import React, { useState } from 'react';
import Form from './Form';
import PersonCard from './PersonCard';
const Main = (props) => {
    const [person, setPerson] = useState(null); // lifting state here (to here) so that from here it goes to form and person card,  
    const [personList, setPersonList] = useState([]); // lifting state here (to here) so that from here it goes to form and person card,  
    
    return(                                    // lifting state here (to here) so that from here it goes to form and person card, by using propps
    <div>  
        <PersonCard person={person} personList={personList}/>
        <Form setPerson={setPerson} personList={personList}
        setPersonList={setPersonList}/>
    </div>
        );
    }

export default Main;