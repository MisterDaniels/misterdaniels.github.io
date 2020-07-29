import React from 'react';

import './index.css';

const Iframe = (props) => {
    return(
        <div className="iframe">
            <iframe {...props} width="600" height="400" frameborder="0" allowfullscreen class="video" />
            <small>Qualquer coisa</small>
        </div>
    );
}

export default Iframe;