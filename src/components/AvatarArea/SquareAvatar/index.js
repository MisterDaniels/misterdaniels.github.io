import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

import './index.css';

const SquareAvatar = (props) => {
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
                <span className="social">
                    <FaLinkedin size={40} />
                </span>
                <span className="social">
                    <FaFacebookSquare size={40} />
                </span>
                <span className="social">
                    <FaTwitterSquare size={40} />
                </span>
                <span className="social">
                    <FaGithubSquare size={40} />
                </span>
            </div>
        </div>
    );
};

export default SquareAvatar;