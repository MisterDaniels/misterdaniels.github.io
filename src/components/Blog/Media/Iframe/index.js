import React from 'react';

import './index.css';

const Iframe = (props) => {
    return(
        <iframe {...props} width="600" height="400" frameborder="0" allowfullscreen class="video" />
    );
}

export default Iframe;