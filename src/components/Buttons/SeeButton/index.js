import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'gatsby';

import './index.css';

const LinkButton = (props) => {
    return(
        <Link 
            to={ props.link ? props.link : '/' }
            className="site-link">
            { props.text }
            <span className="icon">
                <FaLongArrowAltRight size={25} color='#000000' />
            </span>
        </Link>
    );
}

export default LinkButton;