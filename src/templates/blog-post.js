import { graphql, Link } from "gatsby"
import React from "react"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
