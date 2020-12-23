import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Container = styled.div`
  max-width: 1440px;
  margin: 64px auto;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.flexEnd ? "flex-end" : null)};
`
const ImageContainer = styled.div`
  img {
    overflow: hidden;
    width: 665px;
    border-radius: 8px;
  }
`

const TextContainer = styled.div`
  font-size: 15px;
  padding: 0 18px;
  max-width: ${props => (!props.featuredMobile ? "555px" : null)};
  .text {
    margin-top: 16px;
  }
  ul {
    padding: 0;
    list-style: none;
    li:before {
      margin-right: 10px;
      content: "•";
      font-size: 10pt;
    }
  }
`

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      ethical: file(relativePath: { eq: "featured_ethical.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partner: file(relativePath: { eq: "featured_partner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const breakpoints = useBreakpoint()

  return (
    <Container className="container">
      <Row
        breakpointMedium={breakpoints.md}
        className={`row ${breakpoints.featured ? "mb-1" : "mb-4"}`}
      >
        <ImageContainer
          className={`col-12 col-md-6 col-lg-6 ${
            breakpoints.featured && "p-3"
          }`}
        >
          <Img fluid={data.partner.childImageSharp.fluid} />
        </ImageContainer>

        <TextContainer
          featuredMobile={breakpoints.featured}
          className="col-12 col-md-6 col-lg-6"
        >
          <h3>Your Local Partner</h3>
          <div className="text">
            <p>
              Hall's Tree Service, has been a local business of Macon Georgia
              for over 40 years. Committed to helping the people of Middle
              Georgia to:
            </p>
            <ul>
              <li>Cleaning up storm disasters</li>
              <li>Land clearing</li>
              <li>Dangerous tree removals</li>
              <li>And much more</li>
            </ul>
            <p>
              Helping our local community is our number one priority. We have a
              passion to help others and would love to assist you in anything
              you may need.
            </p>
          </div>
        </TextContainer>
      </Row>
      {breakpoints.featured ? (
        <Row reverse={breakpoints.featured} className="row">
          <ImageContainer className="col-12 col-md-6 col-lg-6 p-3">
            <Img fluid={data.ethical.childImageSharp.fluid} />
          </ImageContainer>
          <TextContainer
            featuredMobile={breakpoints.featured}
            className="col-12 col-md-6 col-lg-6"
          >
            <h3>Ethical & Land-Conscious</h3>
            <div className="text">
              <p>
                Halls Tree Services has spent years understanding nature's
                symmetry and complexity in all of it's colossal span throughout
                our community. One of our top priorities is giving you peace of
                mind that when we are on the job we have everyone's safety in
                mind.
              </p>
              <p>
                In our line of business it is not just pushing nature around, we
                have developed a keen eye for making your natural surroundings
                beneficial to your lifestyle while keeping it's beauty in tack!
              </p>
            </div>
          </TextContainer>
        </Row>
      ) : (
        <Row flexEnd className="row">
          <TextContainer className="col-12 col-md-6 col-lg-6">
            <h3>Ethical & Land-Conscious</h3>
            <div className="text">
              <p>
                Halls Tree Services has spent years understanding nature's
                symmetry and complexity in all of it's colossal span throughout
                our community. One of our top priorities is giving you peace of
                mind that when we are on the job we have everyone's safety in
                mind.
              </p>
              <p>
                In our line of business it is not just pushing nature around, we
                have developed a keen eye for making your natural surroundings
                beneficial to your lifestyle while keeping it's beauty in tack!
              </p>
            </div>
          </TextContainer>
          <ImageContainer className="col-12 col-md-6 col-lg-6">
            <Img fluid={data.ethical.childImageSharp.fluid} />
          </ImageContainer>
        </Row>
      )}
    </Container>
  )
}

export default Featured
