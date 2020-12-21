import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  max-width: 100%;
  opacity: 1 !important;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.73),
    rgba(255, 0, 0, 0)
  );
  background-size: cover;
  background-position: 50% 50%;
  margin-bottom: 56px;
`

const HeroH2 = styled.h2`
  font-weight: bold;
  letter-spacing: 0;
  line-height: 48px;
  font-size: 46px;
  color: #fff;
  font-family: Montserrat;
`

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      testimonials: file(relativePath: { eq: "testimonials.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1140, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faq: file(relativePath: { eq: "faq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1140, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutUs: file(relativePath: { eq: "aboutUs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1140, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      services: file(relativePath: { eq: "services.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1140, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData =
    props.image === "testimonials"
      ? data.testimonials.childImageSharp.fluid
      : props.image === "faq"
      ? data.faq.childImageSharp.fluid
      : props.image === "aboutUs"
      ? data.aboutUs.childImageSharp.fluid
      : props.image === "services"
      ? data.services.childImageSharp.fluid
      : null

  return (
    <Container Tag="section" className="hero-image" fluid={imageData}>
      <HeroH2>{props.text}</HeroH2>
    </Container>
  )
}

export default Hero
