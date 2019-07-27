import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/body/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1 style={{fontSize: '1.5em'}}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`