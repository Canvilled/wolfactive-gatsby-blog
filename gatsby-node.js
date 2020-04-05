const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate')

// Implement the Gatsby API â€œcreatePagesâ€. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    // The â€œgraphqlâ€ function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js");
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node
          });
        });
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpBlogs {
                edges {
                  node {
                    id
                    title
                    slug
                    content
                    date(formatString: "DD,MMMM, YYYY")
                    featured_media {
                      source_url
                    }
                    yoast_meta {
                     yoast_wpseo_metadesc
                   }
                   acf {
                    keyword
                   }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const postTemplate = path.resolve("./src/templates/post.js");
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpBlogs.edges, edge => {
            createPage({
              path: `/${edge.node.slug}`,
              component: slash(postTemplate),
              context: edge.node
            });
          });
        });
      })
    // ==== END POSTS ====
    // ==== WEB PAGINATION ====
    .then(()=>{
      graphql(`
                {
                 allWordpressWpBlogs(sort: {fields: date, order: DESC}, filter: {blogsCat: {eq: 5}}) {
                   edges {
                     node {
                       id
                       title
                       slug
                       content
                       date(formatString: "DD,MMMM, YYYY")
                       featured_media {
                         source_url
                       }
                     }
                   }
                 }
               }
      `).then(result =>{
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressWpBlogs.edges;
          const postPerPage = 9;
          const numberOfPages = Math.ceil(posts.length / postPerPage);
          const webPageTemplate = path.resolve('./src/templates/web-development.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(webPageTemplate),
              path:index === 0 ? '/web-development' : `/web-development/trang-${index + 1}`,
              context: {
                posts: posts.slice(index * postPerPage, (index * postPerPage) + postPerPage),
                numberOfPages,
                currentPage: index + 1
              }
            })
          });
      })
    })
    // ==== END WEB PAGINATION ====
    // ==== SEO PAGINATION ====
    .then(()=>{
      graphql(`
                {
                 allWordpressWpBlogs(sort: {fields: date, order: DESC}, filter: {blogsCat: {eq: 10}}) {
                   edges {
                     node {
                       id
                       title
                       slug
                       content
                       date(formatString: "DD,MMMM, YYYY")
                       featured_media {
                         source_url
                       }
                     }
                   }
                 }
               }
      `).then(result =>{
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressWpBlogs.edges;
          const postPerPage = 9;
          const numberOfPages = Math.ceil(posts.length / postPerPage);
          const contentPageTemplate = path.resolve('./src/templates/content.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(contentPageTemplate),
              path:index === 0 ? '/content' : `/content/trang-${index + 1}`,
              context: {
                posts: posts.slice(index * postPerPage, (index * postPerPage) + postPerPage),
                numberOfPages,
                currentPage: index + 1
              }
            })
          });
      })
    })
    // ==== END DESIGN  PAGINATION ====
    // ==== SEO PAGINATION ====
    .then(()=>{
      graphql(`
                {
                 allWordpressWpBlogs(sort: {fields: date, order: DESC}, filter: {blogsCat: {eq: 6}}) {
                   edges {
                     node {
                       id
                       title
                       slug
                       content
                       date(formatString: "DD,MMMM, YYYY")
                       featured_media {
                         source_url
                       }
                     }
                   }
                 }
               }
      `).then(result =>{
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressWpBlogs.edges;
          const postPerPage = 9;
          const numberOfPages = Math.ceil(posts.length / postPerPage);
          const designPageTemplate = path.resolve('./src/templates/graphical-design.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(designPageTemplate),
              path:index === 0 ? '/graphical-design' : `/graphical-design/trang-${index + 1}`,
              context: {
                posts: posts.slice(index * postPerPage, (index * postPerPage) + postPerPage),
                numberOfPages,
                currentPage: index + 1
              }
            })
          });
      })
    })
    // ==== END DESIGN PAGINATION ====
    // ==== SEO PAGINATION ====
    .then(()=>{
      graphql(`
                {
                 allWordpressWpBlogs(sort: {fields: date, order: DESC}, filter: {blogsCat: {eq: 11}}) {
                   edges {
                     node {
                       id
                       title
                       slug
                       content
                       date(formatString: "DD,MMMM, YYYY")
                       featured_media {
                         source_url
                       }
                     }
                   }
                 }
               }
      `).then(result =>{
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressWpBlogs.edges;
          const postPerPage = 9;
          const numberOfPages = Math.ceil(posts.length / postPerPage);
          const seoPageTemplate = path.resolve('./src/templates/seo.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(seoPageTemplate),
              path:index === 0 ? '/seo' : `/seo/trang-${index + 1}`,
              context: {
                posts: posts.slice(index * postPerPage, (index * postPerPage) + postPerPage),
                numberOfPages,
                currentPage: index + 1
              }
            })
          });
      })
    })
    // ==== END SEO PAGINATION ====
    // ==== INDEX PAGINATION ====
    .then(()=>{
      graphql(`
                {
                 allWordpressWpBlogs(sort: {fields: date, order: DESC}) {
                   edges {
                     node {
                       id
                       title
                       slug
                       content
                       date(formatString: "DD,MMMM, YYYY")
                       featured_media{
                         source_url
                         }
                       }
                   }
                 }
               }
      `).then(result =>{
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const posts = result.data.allWordpressWpBlogs.edges;
          const postPerPage = 9;
          const numberOfPages = Math.ceil(posts.length / postPerPage);
          const indexPageTemplate = path.resolve('./src/templates/index.js');

          Array.from({length: numberOfPages}).forEach((page, index) => {
            createPage({
              component: slash(indexPageTemplate),
              path:index === 0 ? '/' : `/trang-${index + 1}`,
              context: {
                posts: posts.slice(index * postPerPage, (index * postPerPage) + postPerPage),
                numberOfPages,
                currentPage: index + 1
              }
            })
          });
        resolve();
      })
    })
    // ==== END INDEX PAGINATION ====
  });
};
