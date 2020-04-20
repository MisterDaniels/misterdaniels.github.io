import React from 'react';

import './index.css';

const BorderButton = (props) => {
    return(
        <button className="border-button">
            { props.text }
        </button>
    );
}

export default BorderButton;