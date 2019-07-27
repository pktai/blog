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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-javascript",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "javascript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
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
    },
    
    //NOTE gatsby-plugin-favicon not support deployment prod.

    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./src/images/favicon.png",
    //   }
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        // name: config.siteTitle,
        // short_name: config.siteTitle,
        // description: config.siteDescription,
        // start_url: config.pathPrefix,
        // background_color: config.backgroundColor,
        // theme_color: config.themeColor,
        display: "standalone",
        icon: "./src/images/favicon.png",
        // icons: [
        //   {
        //     src: "./src/images/favicon.png",
        //     // sizes: "192x192",
        //     // type: "image/png"
        //   }
        // ]
      }
    },
  ],
}