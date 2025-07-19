import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/2025-pin-campus-book`,
  siteMetadata: {
    title: `Pin Campus Book`,
    description: `上科大2025届新生纪念可交互礼物`,
    author: `@pincampusbook`,
    siteUrl: `https://www.pincampusbook.com`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
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
        name: `Pin Campus Book`,
        short_name: `PCB`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/inter-icon.png`, 
      },
    },
  ],
};

export default config;
