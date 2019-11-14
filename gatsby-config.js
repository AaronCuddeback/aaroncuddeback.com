const autoprefixer = require('autoprefixer');

module.exports = {
  // siteMetadata: {
  //   title: `GatsbyJS`,
  //   description: `A fantastic new static site generator.`,
  //   siteUrl: `https://www.gatsbyjs.org`
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-93891881-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'aaroncuddeback.com'
      }
    }
  ]
};
