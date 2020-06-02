import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GiMagnifyingGlass } from 'react-icons/gi';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBadge from '../components/CategoryBadge';
import SeeButton from '../components/Buttons/SeeButton';

import categories from '../data/categories';

import '../styles/blog.css';

export default ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;

    return(
        <div>
            <Container maxWidth="lg">
                <Header hasLogo={ true }
                        hasMenu={ false } />
                <div id="search-tools">
                    <div className="categories">
                        <CategoryBadge category={ categories[0] } />
                    </div>
                    <div className="date">

                    </div>
                    <div className="word">

                    </div>
                </div>
                <div id="content">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} zeroMinWidth>
                            <div className="posts">
                                { posts
                                    .filter(post => post.node.frontmatter.title.length > 0)
                                    .map(({ node: post }) => {
                                        return(
                                            <div className="post" key={ post.id } >
                                                <div className="image">
                                                    <img src={ post.frontmatter.image }></img>
                                                    { post.frontmatter.imageAuthor &&
                                                        <a 
                                                            className="point"
                                                            href={ post.frontmatter.imageAuthorLink }
                                                            target="_blank"
                                                            rel="noopener noreferrer" >
                                                            <span className="tooltip">
                                                                <p className="tooltip-text">
                                                                    { post.frontmatter.imageAuthor }
                                                                </p>
                                                            </span>
                                                        </a>
                                                    }
                                                </div>
                                                <div className="details">
                                                    <div className="categories">
                                                        <CategoryBadge category={ categories[0] } />
                                                        <CategoryBadge category={ categories[1] } />
                                                    </div>
                                                    <div className="texts">
                                                        <h1>
                                                            { post.frontmatter.title }
                                                        </h1>
                                                        <h2>
                                                            { post.frontmatter.date }
                                                        </h2>
                                                        <p> { post.excerpt } </p>
                                                        <div className="actions">
                                                            <h3>
                                                            NOVO 
                                                            </h3>
                                                            <SeeButton 
                                                                text="Ver post"
                                                                link={ post.frontmatter.path } />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    );

}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        path
                    }
                }
            }
        }
    }
`