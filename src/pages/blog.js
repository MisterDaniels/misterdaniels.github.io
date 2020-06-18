import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { GiMagnifyingGlass } from 'react-icons/gi';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBadge from '../components/CategoryBadge';
import Post from '../components/Post';

import categories from '../data/categories';

import '../styles/blog.css';

export default ({ data }) => {
    const { edges: posts } = data.allMdx;

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
                                            <Post post={ post } />
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
    query BlogQuery {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        path
                      	sub_title
                      	category
                      	tags
                      	image
                      	imageAuthor
                      	imageAuthorLink
                    }
                }
            }
        }
    }
`