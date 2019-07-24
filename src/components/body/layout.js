import React from "react";
import "./layout.css";
import "./antd.css";
import { StaticQuery, graphql } from "gatsby";
import { Layout, Spin } from 'antd';
const { Header, Content, Sider } = Layout;


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, 100);
  }

  render() {
    const { children } = this.props;
    return (
      this.state.hidden ? <div
        className="center-hello">
        <Spin tip="loading..." />
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
              backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
            }}>
              <Header style={{ background: 'none' }}>
                <div className="logo" />
              </Header>
              <Layout>
                <Sider className="sider-cus">
                </Sider>
                <Layout style={{
                  padding: '10px 0 10px 0', borderRadius: 10
                }}>
                  <Content className="content-cus">
                    {children}
                  </Content>
                </Layout>
                <Sider className="sider-cus">
                </Sider>
              </Layout>
            </Layout>
          )}
        />
    )
  }
}

export default IndexPage;