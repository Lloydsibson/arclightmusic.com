module.exports = {
  siteMetadata: {
    title: `Arclight Music`,
    description: `Arclight Music was set up to help struggling schools fund music with music and give young musicians the chance to play shows with bigger names where other promoters ...`,
    author: `monocode-uk`,
    siteUrl: `https://www.arclightmusic.co.uk/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b4mi01xlhv4w`,
        accessToken: `DIzQM5YZhwijqQITa3AsVRgF_XU1F8alt2hXn1wtn9U`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arclight-music-default`,
        short_name: `arclight-music`,
        start_url: `/`,
        background_color: `#1a1a1b`,
        theme_color: `#37aa9c`,
        display: `minimal-ui`,
        icon: `src/images/arclight-music-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
