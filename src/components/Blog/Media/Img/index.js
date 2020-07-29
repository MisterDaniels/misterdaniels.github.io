import React from 'react';

import './index.css';

const Img = (props) => {
    return(
        <div className="image">
            <img {...props} />
            <small>Qualquer coisa</small>
        </div>
    );
}

export default Img;