import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  border-top: 1px solid #e3dccf;
  :last-of-type {
    border-bottom: 1px solid #e3dccf;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  flex-wrap: nowrap;
`
const Question = styled.h6`
  margin-bottom: 0;
  overflow-wrap: break-word;
`
const Answer = styled.p`
  margin: 0 0 30px 5px;
  color: #424440;
  padding-right: 20%;
`
const Icon = styled.div`
  min-height: 16px;
  min-width: 31px;
  margin-right: 22px;
  margin-left: 22px;
`

const FaqItem = props => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const data = useStaticQuery(graphql`
    query {
      up: file(relativePath: { eq: "arrow-up.png" }) {
        childImageSharp {
          fluid(maxWidth: 70, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      down: file(relativePath: { eq: "arrow-down.png" }) {
        childImageSharp {
          fluid(maxWidth: 70, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Row className="row mr-1 ml-1">
        <Question>{props.question}</Question>
        <Icon onClick={handleClick}>
          {open ? (
            <Img fluid={data.up.childImageSharp.fluid} />
          ) : (
            <Img fluid={data.down.childImageSharp.fluid} />
          )}
        </Icon>
      </Row>
      {open ? <Answer>{props.answer}</Answer> : null}
    </Container>
  )
}

export default FaqItem
