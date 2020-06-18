import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from '@material-ui/core';
import { Disqus } from 'gatsby-plugin-disqus';
import Gist from 'react-gist';

import Header from '../components/Header';

import '../styles/blog-post.css';

export default function Template({data}) {
    const { mdx: post } = data;
    
    const shortcodes = { Gist };

    const disqusConfig = {
        url: `http://misterdaniels.github.io${post.frontmatter.path}`,
        identifier: post.frontmatter.id,
        title: post.frontmatter.title
    };

    return(
        <div>
            <Container maxWidth="lg">
                <Header hasLogo={ true }
                        hasMenu={ false } />
                <div className="content">
                    <Helmet title={`DEV MisterDaniels - ${post.frontmatter.title}`} />
                    <div className="blog-post">
                        <div className="head">
                            <h1 className="title">{ post.frontmatter.title }</h1>
                            <div className="sub-title">
                                <h2 className="border-separate">{ post.frontmatter.category }</h2>
                                <h3>{ post.frontmatter.date } por <a>{ post.frontmatter.author }</a></h3>
                            </div>
                        </div>
                        <div className="body">
                            <MDXProvider
                                components={ shortcodes }>
                                <MDXRenderer className="body">{ post.body }</MDXRenderer>
                            </MDXProvider>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <Disqus config={ disqusConfig } />
                </div>
            </Container>
        </div>
    );
}

export const blogQuery = graphql`
    query BlogPostByPath($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                id
                date(formatString: "DD MMMM, YYYY")
                path
                title
                category
                author
            }
        }
    }
`