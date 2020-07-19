import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { navigate } from '@reach/router';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from '@material-ui/core';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import Gist from 'react-gist';
import { MdModeComment, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaClock } from 'react-icons/fa';
import readingTime from 'reading-time';
import YouTube  from 'react-youtube';

import Heading from '../components/Blog';
import Text from '../components/Blog';

import Header from '../components/Header';

import '../styles/blog-post.css';

export default function Template({data}) {
    const { mdx: post } = data;
    const { edges: suggestions } = data.allMdx;

    const shortcodes = { 
        Gist, 
        h1: Heading.H1,
        h2: Heading.H2,
        h3: Heading.H3,
        h4: Heading.H4,
        p: Text.P
    };

    const disqusConfig = {
        url: `http://misterdaniels.github.io${post.frontmatter.path}`,
        identifier: post.frontmatter.id,
        title: post.frontmatter.title
    };

    var time = readingTime(post.body);

    var tags = post.frontmatter.tags.split(',');

    return(
        <div>
            <Container maxWidth="lg">
                <Header hasLogo={ true }
                        hasMenu={ false } />
                <div id="content">
                    <Helmet title={`DEV MisterDaniels - ${post.frontmatter.title}`} />
                    <div className="blog-post">
                        <div className="head">
                            <h1 className="title">{ post.frontmatter.title }</h1>
                            <div className="sub-title">
                                <h2 className="border-separate">{ post.frontmatter.category }</h2>
                                <h2>{ new Date(post.frontmatter.date).toLocaleDateString([], { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                    }) } por 
                                    <a 
                                        href={ post.frontmatter.authorUrl } 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        { post.frontmatter.author }
                                    </a>
                                </h2>
                                <span onClick={ e => {
                                    e.preventDefault();

                                    navigate('#comments');
                                } }>
                                    <MdModeComment size={14} color={'#000000'} />
                                    <CommentCount config={ disqusConfig } placeholder={'...'} />
                                </span>
                            </div>
                            <div className="tools">
                                <p>Compartilhe:</p>
                                <a
                                    href={ `https://facebook.com/sharer/sharer.php?u=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaFacebookSquare size={26} color={'#000000'} />
                                </a>
                                <a
                                    href={ `https://twitter.com/home?status=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaTwitterSquare size={26} color={'#000000'} />
                                </a>
                                <a
                                    href={ `https://linkedin.com/shareArticle?mini=true&url=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaLinkedin size={26} color={'#000000'} />
                                </a>
                                <span className="time">
                                    <FaClock size={16} color={'#ffffff'} />
                                    <p>{ time.minutes } min</p>
                                </span>
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
                <div id="navigation">
                    <div className="tags">
                        { tags.length > 0 &&
                            <p>Tags:</p>
                        }
                        { tags.map((tag, index) => (
                            <span className="badge" key={ index } >
                                <p>{ tag }</p>
                            </span>
                        )) }
                    </div>
                    <div className="suggestion">
                        <Link to={ suggestions[0].node.frontmatter.path } >
                            <div className="before">
                                <MdKeyboardArrowLeft size={60} color={'#F55547'} />
                                <div>
                                    <h1>Recomendo esse</h1>
                                        <p>{ suggestions[0].node.frontmatter.title }</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={ suggestions[1].node.frontmatter.path } >
                            <div className="next">
                                <div>
                                    <h1>Ou que tal esse</h1>
                                    <p>{ suggestions[1].node.frontmatter.title }</p>
                                </div>
                                <MdKeyboardArrowRight size={60} color={'#F55547'} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div id="comments">
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
                date
                path
                title
                category
                author
                authorUrl
                tags
            }
        },
        allMdx(
            sort: { order: DESC, fields: [frontmatter___date] } 
            limit: 2 
            filter: { frontmatter: { path: { ne: $path } } } 
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            path
                        }
                    }
                }
        }
    }
`