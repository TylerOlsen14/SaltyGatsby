import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Logo from "../images/logo.jpg"

const logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Logo fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default logo
