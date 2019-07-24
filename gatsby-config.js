module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Gatsby Blog Tutorial Demo`,
    siteUrl: `https://pktai.github.io/blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-antd',
    //   options: {
    //     style: true
    //   },
    // },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#183C52",
          "heading-color": "#777777"
        }
      }
    }
  ],
}