import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Grid, Typography } from '@material-ui/core';

import Header from '../components/header';

export default () => {
    const data = useStaticQuery(
        graphql `
            query {
                allMarkdownRemark(
                    sort: {
                        fields: [frontmatter___date], order: DESC
                    }
                ) {
                    totalCount,
                    edges {
                        node {
                            id,
                            frontmatter {
                                title,
                                date(formatString:"DD/MM/YYYY")
                            },
                            excerpt
                        },
                    }
                }
            }
        `
    );
    return(
        <div>
            <Header/>
            <div id="content">
                <Container maxWidth="sm">
                    <Grid container>
                        <Grid item xs={6} zeroMinWidth>
                            <Typography noWrap>
                                Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                            </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                            <Typography noWrap>
                                Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
