import React from "react"
import { Link } from 'gatsby';
import { FaDyalog, FaBlog, FaGamepad, FaUserAstronaut, FaCode } from 'react-icons/fa';

import './styles.css';

export default () => {
    const menuItems = [
        {
          name: 'Blog',
          slug: '/blog',
          icon: () => { return(<FaBlog size="30px" />) }
        },
        {
          name: 'Games',
          slug: '/games',
          icon: () => { return(<FaGamepad size="30px" />) }
        },
        {
          name: 'Space',
          slug: '/space',
          icon: () => { return(<FaUserAstronaut size="30px" />) }
        },
        {
          name: 'Code',
          slug: '/code',
          icon: () => { return(<FaCode size="30px" />) }
        }
    ];

    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-logo">
                    <Link to="/" className="nav-link">
                        <FaDyalog/>
                        <span className="link-text">Mr. Daniels</span>
                    </Link>
                </li>
                {menuItems.map(menuItem => (
                    <li className="nav-item">
                        <Link to={ menuItem.slug } className="nav-link">
                            { menuItem.icon() }
                            <span className="link-text">{ menuItem.name }</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};