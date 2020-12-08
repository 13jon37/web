import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const IndexPage = (props:any) => (
  <Layout>
    <SEO title="Projects" />
   <div className="image-center">
     <BackgroundImage
      className="masthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <p>Antinous External</p>
          </div>
      </div>
    </BackgroundImage>    
    </div>
    
  
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "glow.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
