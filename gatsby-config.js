const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1224px)",
  l: "(max-width: 1440px)",
  portrait: "(orientation: portrait)",
}

module.exports = {
  siteMetadata: {
    title: `Halls Tree Services`,
    description: `Over 40 years of professional land-conscious experience. We are committed to helping the people of Middle Georgia to cleaning up storm disasters, land clearing, dangerous tree removals, and much more.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/halls-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Montserrat:400,700", "Open Sans"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `faqs`,
        path: `${__dirname}/src/faqs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `team`,
        path: `${__dirname}/src/team`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `team`,
        path: `${__dirname}/src/services`,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
