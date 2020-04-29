import React from 'react';
import { Link } from 'gatsby';

import './index.css';

const LinkButton = (props) => {
    return(
        <Link
            className="link-button"
            to={ props.link ? props.link : '/' } >
            { props.text }
        </Link>
    );
}

export default LinkButton;