import React from 'react';

import './index.css';

const P = ({children}) => {
    return(
        <p className="blog">
            { children }
        </p>
    );
}

export default P;