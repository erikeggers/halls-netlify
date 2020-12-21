import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import FaqItem from "./faq_item"

const Container = styled.div`
  margin-bottom: 97px;
`

const FaqContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/faqs/" } }) {
        edges {
          node {
            frontmatter {
              question
              answer
            }
          }
        }
      }
    }
  `)

  return (
    <Container className="container">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <FaqItem
            key={edge.node.frontmatter.question}
            question={edge.node.frontmatter.question}
            answer={edge.node.frontmatter.answer}
          />
        )
      })}
    </Container>
  )
}

export default FaqContainer
