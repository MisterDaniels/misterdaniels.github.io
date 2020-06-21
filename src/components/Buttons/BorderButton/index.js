import React from 'react';
import { Link } from 'gatsby';

import './index.css';

const BorderButton = (props) => {
    return(
        <Link to={ props.link ? props.link : '/' }>
            <button className="border-button">
                { props.text }
            </button>
        </Link>
    );
}

export default BorderButton;