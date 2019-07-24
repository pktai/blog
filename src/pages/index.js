import React from "react";
import Layout from "../components/body/layout";
import { graphql, Link } from "gatsby";
import './pages.css';

export default ({ data }) => {
	return (
		<Layout>
			<h1>Bài viết mới nhất</h1>
			{data.allMarkdownRemark.edges.map(({ node }, index) =>
				<div key={index}>
					<h3>
						<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
						<span style={{ color: `#BBB` }}>— {node.frontmatter.date}</span>
					</h3>
					<div className="tag-cus">
						{node.frontmatter.tags.map((item, index) =>
							<ul className="tags" key={index}>
								<li><span className="tag">{item}</span></li>
							</ul>
						)}
					</div>
					<p>{node.excerpt}</p>
				</div>
			)}
		</Layout>
	)
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
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
`
