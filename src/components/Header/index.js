import React, { useState } from "react"
import { Link } from 'gatsby';
import { FiArrowLeft } from 'react-icons/fi';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

//import Seo from '../Seo';
import BorderButton from '../Buttons/BorderButton';
import BannerButton from '../Buttons/BannerButton';

import './index.css';

const Header = (props) => {
    const [themeIcon, setThemeIcon] = useState(<FaRegMoon size={20} />);

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

    function changeTheme(theme, themeChanger) {
        switch (theme) {
            case 'light': 
                setThemeIcon(<FaMoon size={20} />);
                theme = 'dark';
                break;
            case 'dark':
                setThemeIcon(<FaRegMoon size={20} />);
                theme = 'light';
                break;
            default:
                setThemeIcon(<FaRegMoon size={20} />);
                theme = 'light';
        }

        themeChanger(theme);
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
                    <div className="actions">
                        <ul className="links">
                            <li>
                                <BorderButton text="Contate-me" link="#contact" />
                            </li>
                        </ul>
                        <span className="blog-item">
                        <BannerButton text="Blog" link="/blog" />
                        </span>

                        <ThemeToggler>
                            {({ theme, toggleTheme }) => (
                                <label onClick={ e => changeTheme(theme, toggleTheme) }>
                                    { themeIcon }
                                </label>
                            )}
                        </ThemeToggler>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Header;