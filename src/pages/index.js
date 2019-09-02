import React from "react";
// import { Tag } from 'antd';
import Layout from "../components/body/layout";
import { graphql, Link } from "gatsby";
import "./pages.css";

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div className="card" key={index}>
          {/* <div className="card-header" /> */}
          <div className="card-body">
            <Link className="link-card" to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
            <div className="card-sub-title">{node.frontmatter.date}</div>
            <div className="card-desc">{node.excerpt}</div>
          </div>
          {
            <div className="tag-cus">
              {node.frontmatter.tags.map((item, index) => (
                <ul className="tags" key={index}>
                  <li>
                    <span className="tag">{item}</span>
                  </li>
                </ul>
              ))}
            </div>
          }
        </div>
        // <div key={index}>
        //   <h3 />
        //   <div style={{ display: 'grid' }}>
        //     <span
        //       style={{ color: `#BBB`, fontSize: '14px', textAlign: 'right' }}
        //     >
        //       {' '}
        //       Created date: {node.frontmatter.date}
        //     </span>
        //     <div className="tag-cus">
        //       {node.frontmatter.tags.map((item, index) => (
        //         // <ul className="tags" key={index}>
        //         // 	<li><span className="tag">{item}</span></li>
        //         // </ul>
        //         <Tag key={index} color="magenta">
        //           {' '}
        //           {item}
        //         </Tag>
        //       ))}
        //     </div>
        //   </div>
        //   <p>{node.excerpt}</p>
        // </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            tags
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
