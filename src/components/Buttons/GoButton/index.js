import React from 'react';
import { Link } from 'gatsby';
import { IoIosArrowForward } from 'react-icons/io';

import './index.css';

const GoButton = (props) => {
    return(
        <Link to={ props.link ? props.link : '/' }>
            <button className="go-button gradient">
                { props.text }
                <IoIosArrowForward />
            </button>
        </Link>
    );
}

export default GoButton;