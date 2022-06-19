import * as React from "react"
import { graphql, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(item => (
        <div key={item.node.id} style={{ borderBottom: "1px solid #eee" }}>
          <h3>{item.node.frontmatter.title}</h3>
          <small>
            Posted by {item.node.frontmatter.author} on{" "}
            {item.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={item.node.frontmatter.path}>read more...</Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query AllPostsQuery {
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
`
