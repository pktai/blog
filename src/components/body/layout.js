/* Import lib */
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';

/* Import css */
import './layout.css';
import './formatFormLanguage.css';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }

            topics: allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
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
        render={(data) => (
          <>
            <header className="header-banner">
              <div className="container-width">
                <nav className="menu">
                  <div className="menu-item">JAVASCRIPT</div>
                  <div className="menu-item">ENGLISH</div>
                </nav>
                <div className="clearfix" />
                <div className="lead-title">
                  {/* Build your templates without coding */}
                </div>
                <div className="sub-lead-title">
                  {/* All text blocks could be edited easily with double clicking on
                  it. You can create new text blocks with the command from the
                  left panel */}
                </div>
                {/* <div className="lead-btn"></div> */}
              </div>
            </header>

            <section className="flex-sect">
              <div className="container-width">
                {/* <div className="flex-title">New Feed</div> */}
                <div className="cards">{children}</div>
              </div>
            </section>

            <section className="bdg-sect">
              <div className="container-width">
                <h1 className="bdg-title">Creator by</h1>

                <div className="badges">
                  <div className="badge">
                    <div className="badge-header" />
                    <div className="badge-avatar" />
                    <div className="badge-body">
                      <div className="badge-name">Tai Pham</div>
                      <div className="badge-role">Full Stack Javascript</div>
                      <div className="badge-desc">
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore ipsum dolor
												sit */}
                        Success = Present + Effort
                      </div>
                    </div>

                    <div className="badge-foot">
                      <a
                        href="https://www.facebook.com/pktai.IoT"
                        className="badge-link"
                      >
                        f
                      </a>
                      <span className="badge-link">t</span>
                      <span className="badge-link">ln</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer className="footer-under">
              <div className="container-width">
                <div className="footer-container">
                  <div className="foot-lists">
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="copyright">
                <div className="container-width">
                  <div className="made-with">Made By Tai Pham @2020</div>
                  <div className="foot-social-btns">
                    facebook twitter linkedin mail
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}

export default Layout;
