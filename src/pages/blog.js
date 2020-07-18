import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBadge from '../components/CategoryBadge';
import SerchInput from '../components/SearchInput';
import SearchDate from '../components/SearchDate';
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
                        <SearchDate />
                    </div>
                    <div className="word">
                        <SerchInput />
                    </div>
                </div>
                <div id="post">
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
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        path
                      	category
                      	image
                      	imageAuthor
                      	imageAuthorLink
                    }
                }
            }
        }
    }
`