import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  if (!data?.logo?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img loading="eager" fixed={data.logo.childImageSharp.fixed} />
}

export default Logo
