module.exports = {
  siteMetadata: {
    title: `Data Lab`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-root-import',
    'gatsby-plugin-material-ui',
    `gatsby-plugin-react-helmet`,
		{
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `datalab`,
        path: `${__dirname}/static/data/`,
        crossOrigin: `use-credentials`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg', // support for svg components
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-19138737-13",
	      siteSpeedSampleRate: 90,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
