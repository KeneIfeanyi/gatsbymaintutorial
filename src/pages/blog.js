import * as React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';
// import { MDXRenderer }  from 'gatsby-plugin-mdx';

const Blog = ({data}) => {
    return(
        <Layout pageTitle='Blog' pageHeading='Blog Post'>
                {data.allMdx.nodes.map((node) =>{
                    return <article key={node.id}>
                        <h2>{node.frontmatter.Title}{node.name}</h2>
                        <p>{node.frontmatter.Date}</p>
                        <p>{node.excerpt}</p>
                        </article>;
                })}          
        </Layout>
    )
};

export const query = graphql`
    query {
        allMdx (sort: {body: ASC}) {
        nodes {
            frontmatter {
            Date(formatString: "dddd MMMM Do YYYY")
            Title
            }
            id
            excerpt
        }
        }
    }
`;


export default Blog;