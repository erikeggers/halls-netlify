import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  background-color: #7d5e40;
  width: 100%;
  padding: 60px 0;
`

const Title = styled.h3`
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`

// const CardImage = styled.div`
//   width: 100%;
//   border-radius: 8px;
//   margin-bottom: 22px;
//   max-height: 175px;
// `

const CardImage = styled(BackgroundImage)`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 8px;
  margin-bottom: 22px;

  @media (min-width: 320px) {
    height: 180px;
  }
  @media (min-width: 768px) {
    height: 184px;
  }
  @media (min-width: 991px) {
    height: 160px;
  }
`

const CardTitle = styled.h5`
  margin-bottom: 22px;
`

const CardText = styled.p`
  color: #fff;
`

const WhyUse = () => {
  const data = useStaticQuery(graphql`
    query {
      years: file(relativePath: { eq: "40_years.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      environment: file(relativePath: { eq: "environment.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dependable: file(relativePath: { eq: "dependable.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      safety: file(relativePath: { eq: "safety.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div className="container">
        <Title>Why Use Halls Tree Service</Title>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <CardImage fluid={data.years.childImageSharp.fluid} />
            <CardTitle>Over 40 years of expereince</CardTitle>
            <CardText>
              Helping our local community is our number one priority. We have a
              passion to help others and would love to assist you.
            </CardText>
          </div>
          <div className="col-sm-6 col-lg-3">
            <CardImage fluid={data.environment.childImageSharp.fluid} />
            <CardTitle>Mindfullness to the environment</CardTitle>
            <CardText>
              In our line of business it is not just pushing nature around, we
              have developed a keen eye for making your natural surroundings
              beneficial to your lifestyle while keeping it's beauty in tack!
            </CardText>
          </div>
          <div className="col-sm-6 col-lg-3">
            <CardImage fluid={data.dependable.childImageSharp.fluid} />
            <CardTitle>Reliable and Dependable</CardTitle>
            <CardText>
              Halls Tree Service has built it's reputation in Middle, GA on
              being a reliable, trustworthy and dependable company that keeps
              its customers as a top priority.
            </CardText>
          </div>
          <div className="col-sm-6 col-lg-3">
            <CardImage fluid={data.safety.childImageSharp.fluid} />
            <CardTitle>Safety and Peace of Mind</CardTitle>
            <CardText>
              Halls Tree Service has spent years understanding nature's symmetry
              and complexity throughout our community. This helps us to
              understand the tasks we take on, how it will affect our homes and
              neighbors.
            </CardText>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhyUse
