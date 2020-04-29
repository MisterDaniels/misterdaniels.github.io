import React from 'react';

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithubAlt } from 'react-icons/fa';

import './index.css';

export default () => {
    return(
        <footer>
            <div className="social-medias">
                <FaLinkedinIn size={22} color={'#F55547'} />
                <FaFacebookF size={22} color={'#F55547'} />
                <FaTwitter size={22} color={'#F55547'} />
                <FaGithubAlt size={22} color={'#F55547'} />
            </div>
            <div className="message">
                <h5>
                    Feito com ❤ por um desenvolvedor apaixonado pelo que faz
                </h5>
            </div>
        </footer>
    );
};