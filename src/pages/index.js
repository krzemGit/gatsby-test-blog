import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Welcome to my website</h1>
      <p>Sample website for Gatsby</p>
    </div>
    <Link to="/about">About page</Link>
  </Layout>
)

export default IndexPage
