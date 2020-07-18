import React from 'react';

import './index.css';

const H2 = ({children}) => {
    return(
        <h2 className="blog">
            { children }
        </h2>
    );
}

export default H2;