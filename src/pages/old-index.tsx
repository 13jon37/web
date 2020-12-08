import React from "react"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = (props: any) => (
  <Layout>
    <SEO title="Home" />
    <div className="image-center">
     <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <p>Hello, I'm Jon Locklear</p>
          </div>
      </div>
    </BackgroundImage>    
    </div>
    <div className="text-center">
      <p>Welcome to my first website made with Gatsby.</p>
      <p>Now go build something great.</p>
    </div>

    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;