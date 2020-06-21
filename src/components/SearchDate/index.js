import React from 'react';

import './index.css';

export default () => {
    return(
        <div className="search-date" >
            <input 
                name="date" 
                type="date" 
                placeholder="Digite a data" />
        </div>
    );
};