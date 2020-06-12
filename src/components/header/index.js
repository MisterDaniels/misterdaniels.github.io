import React from "react"
import { Link } from 'gatsby';

import BorderButton from '../Buttons/BorderButton';
import LinkButton from '../Buttons/LinkButton';
import BannerButton from '../Buttons/BannerButton';

import './index.css';

const Header = (props) => {
    return(
        <nav className="navbar">
            <div className="menu">

                { props.hasLogo &&
                    <Link className="logo" to="/">
                        <img src="/Logo.svg" alt="Dev. Daniel Silva"/>
                    </Link>
                }

                { props.hasMenu &&
                    <div>
                        <ul className="links">
                            <li>
                                <LinkButton text="Sobre mim" />
                            </li>
                            <li>
                                <BorderButton text="Contrate-me" />
                            </li>
                        </ul>
                        <span className="blog-item">
                            <BannerButton text="Blog" link="/blog" />
                        </span>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Header;