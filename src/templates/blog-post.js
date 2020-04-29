import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import '../styles/blog-post.css';

export default function Template({data}) {
    const { markdownRemark: post } = data
    
    return(
        <div className="blog-post-content">
            <Helmet title={`Dev. MisterDaniels - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{ post.frontmatter.title }</h1>
                <div 
                    className="blog-post-body"
                    dangerouslySetInnerHTML={ {__html: post.html} } />
            </div>
        </div>
    );
}

export const blogQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "DD MMMM, YYYY")
                path
                title
            }
        }
    }
`