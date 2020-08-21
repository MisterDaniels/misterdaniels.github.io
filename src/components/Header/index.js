import React from "react"
import { Link } from 'gatsby';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import BorderButton from '../Buttons/BorderButton';
import BannerButton from '../Buttons/BannerButton';

import './index.css';

const Header = (props) => {

    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedColorPreference = typeof persistedColorPreference === 'string';

        if (hasPersistedColorPreference) {
            return persistedColorPreference;
        }

        const mediaQueryPreference = window.matchMedia('(prefers-color-scheme: dark');
        const hasMediaQueryPreference = typeof mediaQueryPreference.matches === 'boolean';

        if (hasMediaQueryPreference) {
            return mediaQueryPreference;
        }

        return 'light';
    }
    
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

                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <label>
                            <input 
                                type="checkbox"
                                onChange={ e => toggleTheme(e.target.checked ? 'dark' : 'light') }
                                checked={ theme === 'dark' } />
                                { '' }
                                Dark mode
                        </label>
                    )}
                </ThemeToggler>
            </div>
        </nav>
    );
}

export default Header;