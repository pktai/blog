module.exports = {
  pathPrefix: `/gatsby-tutorial`,
  siteMetadata: {
    title: `Gatsby Blog Tutorial Demo`,
    siteUrl: `https://pktai.github.io/gatsby-tutorial`,
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
  ],
}