/* eslint-disable consistent-return */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { registerLocalFs } = require('netlify-cms-proxy-server/dist/middlewares');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));

      return Promise.reject(result.errors);
    }

    // Filter out the footer, navbar, and meetups so we don't create pages for those
    // Filter out the footer, navbar, and meetups so we don't create pages for those
    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      if (edge.node.frontmatter.templateKey === 'navbar' || edge.node.frontmatter.templateKey === 'footer') {
        return false;
      }

      return true;
    });

    postOrPage.forEach((edge) => {
      const { id, fields, frontmatter } = edge.node;
      let component;
      let pathName;

      if (frontmatter.templateKey === 'home-page') {
        pathName = '/';
        component = path.resolve('src/pages/index.js');
      } else {
        pathName = frontmatter.path || fields.slug;
        component = path.resolve(`src/templates/${String(frontmatter.templateKey)}.js`);
      }

      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // // Tag pages:
    // let tags = [];
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags);
    //   }
    // });
    // Eliminate duplicate tags
    //   tags = _.uniq(tags);

    //   // Make tag pages
    //   tags.forEach(tag => {
    //     const tagPath = `/tags/${_.kebabCase(tag)}/`;

    //     createPage({
    //       path: tagPath,
    //       component: path.resolve(`src/templates/tags.js`),
    //       context: {
    //         tag,
    //       },
    //     });
    //   });
    // });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, trailingSlash: false });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreateDevServer = async ({ app }) => {
  // https://github.com/netlify/netlify-cms/pull/3361
  await registerLocalFs(app);
};
