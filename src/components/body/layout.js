/* Import lib */
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Layout, Spin, Icon } from 'antd';
/* Import css */
import './layout.css';
import './beautiCode.css';

class IndexPage extends PureComponent {
  constructor() {
    super();
  }
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
        render={data => (
          <>
            <header className="header-banner">
              <div className="container-width">
                <nav className="menu">
                  <div className="menu-item">BUILDER</div>
                  <div className="menu-item">TEMPLATE</div>
                  <div className="menu-item">WEB</div>
                </nav>
                <div className="clearfix" />
                <div className="lead-title">
                  Build your templates without coding
                </div>
                <div className="sub-lead-title">
                  All text blocks could be edited easily with double clicking on
                  it. You can create new text blocks with the command from the
                  left panel
                </div>
                <div className="lead-btn">Hover me</div>
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
                <h1 className="bdg-title">The team</h1>
                <div className="badges">
                  <div className="badge">
                    <div className="badge-header" />
                    <img
                      // src="../../images/TaiPham.jpg"
                      className="badge-avatar"
                    />
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
                    <div className="foot-list">
                      <div className="foot-list-title">About us</div>
                      <div className="foot-list-item">Contact</div>
                      <div className="foot-list-item">Events</div>
                      <div className="foot-list-item">Company</div>
                      <div className="foot-list-item">Jobs</div>
                      <div className="foot-list-item">Blog</div>
                    </div>
                    <div className="foot-list">
                      <div className="foot-list-title">Services</div>
                      <div className="foot-list-item">Education</div>
                      <div className="foot-list-item">Partner</div>
                      <div className="foot-list-item">Community</div>
                      <div className="foot-list-item">Forum</div>
                      <div className="foot-list-item">Download</div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* <div className="form-sub">
                    <div className="foot-form-cont">
                      <div className="foot-form-title">Subscribe</div>
                      <div className="foot-form-desc">
                        Subscribe to our newsletter to receive exclusive offers
                        and the latest news
                      </div>
                      <input
                        name="name"
                        placeholder="Name"
                        className="sub-input"
                      />
                      <input
                        name="email"
                        placeholder="Email"
                        className="sub-input"
                      />
                      <button type="button" className="sub-btn">
                        Submit
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="copyright">
                <div className="container-width">
                  <div className="made-with">Made By Tai Pham @2019</div>
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

export default IndexPage;
