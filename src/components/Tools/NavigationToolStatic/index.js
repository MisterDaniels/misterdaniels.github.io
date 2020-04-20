import React from 'react';
import { Link } from 'gatsby';

import './index.css';

const NavigationToolStatic = (props) => {
    return(
        <div className="navigation-tool-static">
            { props.menus.map((menu, index) => (
                <div className="navigation-menu tooltip" key={ index }>
                    <Link to={ menu.link } className="tooltip">
                        { menu.icon }
                        <span className="tooltip-text">{ menu.title }</span>
                    </Link>
                    { index < props.menus.length-1 &&
                        <hr></hr>
                    }
                </div>
            ))}
        </div>
    );
}

export default NavigationToolStatic;