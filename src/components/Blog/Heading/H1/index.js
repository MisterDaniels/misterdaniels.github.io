import React from 'react';

import './index.css';

const H1 = ({children}) => {
    return(
        <h1 className="blog">
            { children }
        </h1>
    );
}

export default H1;