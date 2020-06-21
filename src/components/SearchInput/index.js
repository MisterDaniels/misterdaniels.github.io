import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi'

import './index.css';

export default () => {
    const [forSearch, setForSearch] = useState(false);

    return(
        <div className="search" >
            <input 
                name="search" 
                type="search" 
                placeholder="Digite para procurar"
                active={ forSearch ? 'true' : 'false' } />
            <GiMagnifyingGlass 
                size={27} 
                color={'#F55547'}
                onClick={ () => { setForSearch(!forSearch)  } } />
        </div>
    );
};