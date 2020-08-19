import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import './index.css';

const BorderButton = (props) => {
    return(
        <Link to={ props.link ? props.link : '/' }>
            <motion.button 
                className="border-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                { props.text }
            </motion.button>
        </Link>
    );
}

export default BorderButton;