import React from "react"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = (props: any) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <p>test</p>
          </div>
      </div>
      
    </BackgroundImage>
    <div className="text-center">
      <h1>Welcome</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
    <div className="video">
      <iframe width="100%" height="540" title="idk"
        src="https://www.youtube.com/embed/qfNSeEOaSm8" frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;">
        
        </iframe>
      
    </div>
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "meadow.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;