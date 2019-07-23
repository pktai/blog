import React from "react";
import "./layout.css";
import { StaticQuery, graphql } from "gatsby";
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


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
        <Layout style={{  backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        }}>
    <Header style={{background: '#194c97'}}>
      <div className="logo" />
    </Header>
    <Layout>
      <Sider width={300} style={{ background: '#fff', margin: '24px 24px 24px', borderRadius:20 }}>
      </Sider>
      <Layout style={{ padding: '24px 0px 24px 0px', borderRadius:20
 }}>
        <Content
          style={{
            background: '#fff',
            padding: 60,
            margin: 0,
            minHeight: 768,
            boxShadow: 'rgba(176, 168, 168, 0.75) 0px 0px -1px -1px',borderRadius:20
            // borderRadius: 15
          }}
        >
          {children}
        </Content>
      </Layout>
      <Sider width={300} style={{ background: '#fff', margin: '24px 24px 24px', borderRadius:20 }}>
      </Sider>
    </Layout>
  </Layout>
      )}
    />
  )
}