import React from 'react';
import _ from 'lodash';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

import './index.css';
import userInformation from '../../../data/user';

const SquareAvatar = (props) => {

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

    return(
        <div className="square-avatar">
            <div className="avatar">
                <img src={ props.img } alt="Avatar"></img>
                <div className="status-area">
                    <span role="img" aria-label={ props.emoji.name }>{ props.emoji.text }</span>
                    <p>{ props.status }</p>
                </div>
            </div>
            <div className="social-icons">
                { socialLinkedin &&
                    <span className="social">
                        <a
                            href={ socialLinkedin.url }
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </span>
                }
                { socialFacebook &&
                    <span className="social">
                        <a
                            href={ socialFacebook.url }
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaFacebookSquare size={40} />
                        </a>
                    </span>
                }
                { socialTwitter &&
                        <span className="social">
                            <a
                                href={ socialTwitter.url }
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTwitterSquare size={40} />
                            </a>
                        </span>
                }
                { socialGithub &&
                    <span className="social">
                        <a
                            href={ socialGithub.url }
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithubSquare size={40} />
                        </a>
                    </span>
                }
            </div>
        </div>
    );
};

export default SquareAvatar;