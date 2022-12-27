module.exports = {
  siteMetadata: {
    title: `Geletka+ Pattern Library`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
  ],
  pathPrefix: `/pages`,
};
