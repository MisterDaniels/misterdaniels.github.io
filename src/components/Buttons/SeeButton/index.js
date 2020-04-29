import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './index.css';

const LinkButton = (props) => {
    return(
        <a 
            href={ props.link ? props.link : '/' }
            target="_blank"
            rel="noopener noreferrer"
            className="site-link">
            { props.text }
            <span className="icon">
                <FaLongArrowAltRight size={25} color='#000000' />
            </span>
        </a>
    );
}

export default LinkButton;