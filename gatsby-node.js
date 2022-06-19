exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  const postTemplate = require.resolve("./src/templates/blog-post.js")

  return graphql(`
    query PostsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              path
              title
            }
            id
            html
            excerpt(pruneLength: 15)
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) Promise.reject(res.errors)
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: node,
      })
    })
  })
}
