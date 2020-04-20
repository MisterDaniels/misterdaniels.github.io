import React from 'react';
import { Link } from 'gatsby';

import './index.css';

const BannerButton = (props) => {
    return(
        <Link to={ props.link ? props.link : '/' }>
            <button className="banner-button">
                { props.text }
            </button>
        </Link>
    );
}

export default BannerButton;