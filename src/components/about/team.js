import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Container = styled.div`
  width: 100%;
  background: #faf7ee;
  padding: 54px 0 10px 0;
`
const Row = styled.div`
  justify-content: center;
  margin-bottom: 30px;
`
const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 250px;
  width: 250px;
  margin-bottom: 25px;
  @media (max-width: 320px) {
    height: 220px;
    width: 220px;
  }
`
const TeamImage = styled(BackgroundImage)`
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: 100%;
  margin-bottom: 56px;
`
const Title = styled.h6`
  margin-bottom: 25px;
`

const About = styled.p`
  color: #424440;
  max-width: 360px;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
`

const TeamContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/team/" } }) {
        edges {
          node {
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              about
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <div className="container">
        <Row className="row">
          <h3>Our Team</h3>
        </Row>
        <Row className="row">
          {data.allMarkdownRemark.edges.map((edge, i) => {
            return (
              <TeamMember className="col-sm-12 col-lg-6 mb-4" key={i++}>
                <ImageContainer>
                  <TeamImage
                    fluid={
                      edge.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                  />
                </ImageContainer>
                <Title>{edge.node.frontmatter.title}</Title>
                <About>{edge.node.frontmatter.about}</About>
              </TeamMember>
            )
          })}
        </Row>
      </div>
    </Container>
  )
}

export default TeamContainer
