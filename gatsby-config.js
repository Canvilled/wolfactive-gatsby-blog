module.exports = {
  siteMetadata: {
    title: `Wolfactive Blogs Site`,
    description: `Wolfactive đã thực hiện hơn 300+ dự án lớn nhỏ cho các đối tác trong và ngoài nước. Chúng tôi tự tin mang đến giá trị khác biệt cho dự án của bạn!`,
    author: `Wolfactive, Huy Nguyễn, Phương Nam`,
    keywords: `Thiết kế web chuẩn SEO, Thiết kế đồ họa, Branding, Thiết kế logo, Graphic Design, Web Develop, Lập trình webiste, Thiết kế website, lập trình web`,
    image:`icons/icon-256x256.png`,
    url: `http://blog.wolfactive.net/`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1c6182`,
        theme_color: `#1c6182`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-source-wordpress`,
    options:{
        baseUrl:`wolfactive.net`,
        protocol:`http`,
        hostingWPCOM: false,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
