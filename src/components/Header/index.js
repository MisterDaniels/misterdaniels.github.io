import React from "react"
import { Link } from 'gatsby';
import { FiArrowLeft } from 'react-icons/fi';

import BorderButton from '../Buttons/BorderButton';
import BannerButton from '../Buttons/BannerButton';

import './index.css';

const Header = (props) => {
    return(
        <nav className="navbar">
            { typeof window !== `undefined` && window.location.href.match(/((\/)+(blog)(\/)?)$/) &&
                <span className="banner"></span>
            }

            { typeof window !== `undefined` && window.location.href.match(/((\/)+(blog)(\/))(.)+$/) &&
                <Link to="/blog">
                    <span className="back">
                        <FiArrowLeft size={20} color={'#F55547'} />
                        <p>Voltar</p>
                    </span>
                </Link>
            }

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
                                <BorderButton text="Contate-me" link="#contact" />
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