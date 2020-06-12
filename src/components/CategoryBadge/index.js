import React from 'react';

import './index.css';

export default (props) => {
    return(
        <span className="badge" >
            { props.category.icon }
            <p>
                { props.category.title }
            </p>
        </span>
    );
};