import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';

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
        <Layout>
            <div>
                <h1 css={css`
                    display: inline-block;
                    border-bottom: 1px solid;
                `}>
                    Amazing Pandas Eating Things 
                </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <div key={node.id}>
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span css={css `
                                color: #bbb;
                            `}>
                                - {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>
                <p>TEXTTTTTTTTTTTTTTT</p>

            </div>
        </Layout>
    );
};
