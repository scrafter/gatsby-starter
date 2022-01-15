module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `Daimley Polska`,
    description: `Agencja zatrudnienia oraz szkolenia sprzedażowe`,
    siteUrl: `https://daimley.pl`,
    author: `Andrzej Urbaniak`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daimley Polska | Agencja zatrudnienia oraz szkolenia sprzedażowe`,
        short_name: `Daimley`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#419d3e`,
        display: `standalone`,
        icon: `src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: ['pl'],
        // Default site language
        defaultLanguage: 'pl',
        // Redirects to `/pt` in the route `/`
        redirect: false,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
  ],
};
