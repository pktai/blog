import React from "react";
import "./layout.css";
import Menu from "./menu";
import Sidebar from "./sidebar";
import { StaticQuery, graphql } from "gatsby";
import SidebarRight from './sidebar-right';
import AtomSpinner from './atomSpiner';

export default props => {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        },
        topics: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                categories
                tags
              }
            }
          }
        }
      }
    `}
      render={data => (
        <div>
          <div class="header">
            {/* <AtomSpinner /> */}
          </div>

          <div class="row">
            <div class="col-3 menu">
              <ul>
                <li>The Flight</li>
                <li>The City</li>
                <li>The Island</li>
                <li>The Food</li>
              </ul>
            </div>

            <div class="col-6">
              {children}
            </div>

            <div class="col-3 right">
              <div class="aside">
                <h2>What?</h2>
                <p>Chania is a city on the island of Crete.</p>
                <h2>Where?</h2>
                <p>Crete is a Greek island in the Mediterranean Sea.</p>
                <h2>How?</h2>
                <p>You can reach Chania airport from all over Europe.</p>
              </div>
            </div>
          </div>

          <div class="footer">
            <p>Copy Right © Tai Pham </p>
          </div>
        </ div>
      )}
    />
  )
}