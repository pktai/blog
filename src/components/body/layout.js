/* Import lib */
import React, { PureComponent } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Layout, Spin, Icon } from 'antd';
/* Import css */
import "./layout.css";
import "./antd.css";
import "./beautiCode.css";
/*declare variable */
const { Content } = Layout;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, 700);
  }

  render() {
    const { children } = this.props;
    return (
      this.state.hidden ? <div
        className="center-hello">
        <Spin indicator={antIcon} tip="Tai Pham" />
      </div> :
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
            <Layout style={{
              fontSize: 20,
              background: "#ffffff"
            }}>
              {/* <Header style={{ background: 'none' }}>
                <div className="logo" />
              </Header> */}
              <Layout style={{display: '-webkit-box'}}>
                <div className="sider-cus">
                </div>
                <Layout style={{
                  padding: '0 0 40px 0', boxShadow: '0 0 11px rgba(33,33,33,.2)',
                }}>
                  <Content className="content-cus">
                    {children}
                  </Content>
                </Layout>
                <div className="sider-cus">
                </div>
              </Layout>
            </Layout>
          )}
        />
    )
  }
}

export default IndexPage;