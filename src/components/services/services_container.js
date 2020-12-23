import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ServicesItem from "./services_item"

const Container = styled.div`
  width: 100%;
`

const ServicesContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/services/" } }) {
        edges {
          node {
            frontmatter {
              title
              desc
              image {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 240, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container className="container">
      <div className="row">
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <ServicesItem
              key={i++}
              title={edge.node.frontmatter.title}
              desc={edge.node.frontmatter.desc}
              image={edge.node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default ServicesContainer
