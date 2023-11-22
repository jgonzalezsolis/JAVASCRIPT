import React, { useState } from 'react';
import Subcontens from './Subcontents';
import Advertisement from './Advertisement';

const Main = (props) => {
    
    return(                                    // lifting state here (to here) so that from here it goes to form and person card, by using propps
    <div>  
        <p>main section</p>
        <Subcontens/>
        <Subcontens/>
        <Subcontens/>
        <Advertisement/>
    </div>
        );
    }

export default Main;