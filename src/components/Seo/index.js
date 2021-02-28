import React from "react"
import Helmet from 'react-helmet';

const Seo = (props) => {
    return(
        <>
            <Helmet>
                <script id="mcjs">
                    {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6a2018b04b2060f4273a01fcf/9c6b0ff4280b287dad5ee77bb.js");`}
                </script>
            </Helmet>
        </>
    );
}

export default Seo;