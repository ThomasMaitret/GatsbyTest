module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nzvnppssoup8`,
        accessToken: `feeb9203fcfbe56164b81d2447491ec9aa41d14d03a28223d2acf04422b070d1`
      }
    }
  ]
};
