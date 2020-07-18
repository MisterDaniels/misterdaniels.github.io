import React from 'react';

import './index.css';

const H3 = ({children}) => {
    return(
        <h3 className="blog">
            { children }
        </h3>
    );
}

export default H3;