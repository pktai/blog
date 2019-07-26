import React, { PureComponent } from "react";
import "./layout.css";
import "./antd.css";
import { StaticQuery, graphql } from "gatsby";
import { Layout, Spin, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
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
              background: '#00c0aa'
            }}>
              <Header style={{ background: 'none' }}>
                <div className="logo" />
              </Header>
              <Layout>
                <Sider className="sider-cus">
                </Sider>
                <Layout style={{
                  padding: '10px 0 10px 0',
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