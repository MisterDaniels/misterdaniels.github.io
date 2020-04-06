import React from "react";
import Layout from "../components/layout"

export default () => (
    <Layout style={{ color: `teal` }}>
        <p>Send us a message!</p>
        <div>
            <h1>I'd love to talk! Email me at the address below</h1>
            <p>
                <a href="mailto:dodosilva51@gmail.com">dodosilva51@gmail.com</a>
            </p>
        </div>
    </Layout>
);