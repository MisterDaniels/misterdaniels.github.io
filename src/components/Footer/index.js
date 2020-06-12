import React from 'react';
import _ from 'lodash';

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';

import './index.css';
import userInformation from '../../data/user';

export default () => {

    var socialLinkedin = _.find(userInformation.social, (information) => {
        return information.name === 'Linkedin'
    });

    var socialFacebook = _.find(userInformation.social, (information) => {
        return information.name === 'Facebook'
    });

    var socialTwitter = _.find(userInformation.social, (information) => {
        return information.name === 'Twitter'
    });

    var socialGithub = _.find(userInformation.social, (information) => {
        return information.name === 'Github'
    });

    var socialDribble = _.find(userInformation.social, (information) => {
        return information.name === 'Dribble'
    });

    return(
        <footer>
            <div className="social-medias">
                { socialLinkedin &&
                    <a
                        href={ socialLinkedin.url }
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedinIn size={22} color={'#F55547'} />
                    </a>
                }
                { socialFacebook &&
                    <a
                        href={ socialFacebook.url }
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebookF size={22} color={'#F55547'} />
                    </a>
                }
                { socialTwitter &&
                    <a
                        href={ socialTwitter.url }
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaTwitter size={22} color={'#F55547'} />
                    </a>
                }
                { socialGithub &&
                    <a
                        href={ socialGithub.url }
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithubAlt size={22} color={'#F55547'} />
                    </a>
                }
                { socialDribble &&
                    <a
                        href={ socialDribble.url }
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaDribbble size={22} color={'#F55547'} />
                    </a>
                }
            </div>
            <div className="message">
                <h5>
                    Feito com ❤ por um desenvolvedor apaixonado pelo que faz
                </h5>
            </div>
        </footer>
    );
};