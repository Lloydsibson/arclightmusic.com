// FIX FOR APACHE SERVERS - MOVES FAVICON ICON TO ITS OWN FOLDER RATHER THEN THE 'ICON' DIRECTORY
// FUNCTION FOR 'gatsby-plugin-manifest'
const generateFavicons = sizes => {
  return sizes.map(size => {
    return {
      src: `favicons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    }
  })
}

module.exports = {
  siteMetadata: {
    title: `Arclight Music`,
    description: `Arclight Music was set up to help struggling schools fund music with music and give young musicians the chance to play shows with bigger names where other promoters...`,
    author: `monocode-uk`,
    siteUrl: `https://www.arclightmusic.co.uk/`,
    robots: `content='noindex'`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b4mi01xlhv4w`,
        accessToken: `DIzQM5YZhwijqQITa3AsVRgF_XU1F8alt2hXn1wtn9U`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2632508,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-152874806-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        cookieDomain: "arclightmusic.co.uk",
        // defaults to false
        enableWebVitalsTracking: true,
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
        background_color: `#1a1a1a`,
        theme_color: `#37aa9c`,
        display: `minimal-ui`,
        icon: `src/images/arclight-music-icon.png`,
        icons: generateFavicons([48, 72, 96, 144, 192, 256, 384, 512]), // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //`gatsby-plugin-sitemap`,
  ],
}
