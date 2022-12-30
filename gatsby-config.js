// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbydrupalhomepage.gatsbyjs.io/",
    title: "Gatsby Drupal Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Drupal",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        
        },
        fastBuilds: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
  ],
}
