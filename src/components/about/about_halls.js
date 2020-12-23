import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Container = styled.div`
  /* margin: 0 40px; */
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.breakpoint ? "24px" : "64px")};
`
const ImageContainer = styled.div`
  /* max-width: 665px; */
`

const TextContainer = styled.div`
  font-size: 15px;
  padding: 20px;
  /* max-width: 555px; */
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

const AboutHalls = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "featured_partner.jpg" }) {
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
      <Row className="row" breakpoint={breakpoints.featured}>
        <ImageContainer className="col-sm-12 col-md-6 col-lg-7">
          <Img
            fluid={data.aboutImage.childImageSharp.fluid}
            style={{ borderRadius: "8px" }}
          />
        </ImageContainer>

        <TextContainer className="col-sm-12 col-md-6 col-lg-5">
          <h3>About Halls Tree Services</h3>
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
    </Container>
  )
}

export default AboutHalls
