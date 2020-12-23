import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { PopupText } from "react-calendly"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Container = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 600px;
  max-width: 100%;
  opacity: 1 !important;
  background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #101426 100%);
  background-size: cover;
  background-position: 50% 50%;
`

const HeroH2 = styled.h2`
  max-width: 555px;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${props =>
    props.breakpoints.sm ? "24px" : props.breakpoints.md ? "32px" : "48px"};
  font-size: ${props =>
    props.breakpoints.sm ? "22px" : props.breakpoints.md ? "30px" : "46px"};
  color: #fff;
  font-family: Montserrat;
`
const HeroText = styled.p`
  margin-bottom: 40px;
  max-width: 555px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 15px;
  letter-spacing: 0;
  line-height: 24px;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      indexHero: file(relativePath: { eq: "index_hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const breakpoints = useBreakpoint()

  return (
    <Container
      Tag="section"
      className="hero-image"
      fluid={data.indexHero.childImageSharp.fluid}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <HeroH2 breakpoints={breakpoints}>
              Over 40 years of professional land-conscious experience.
            </HeroH2>
            <HeroText>
              We are committed to helping the people of Middle Georgia to
              cleaning up storm disasters, land clearing, dangerous tree
              removals, and much more.
            </HeroText>
            <PopupText
              pageSettings={{
                backgroundColor: "F5F1E0",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "8CBD45",
                textColor: "4d5055",
              }}
              styles={{
                backgroundColor: "#8CBD45",
                borderRadius: "28px",
                boxShadow: "0 4px 8px 0 rgba(35, 35, 35, 0.14)",
                padding: "18px 24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "0",
                color: "#ffffff",
              }}
              text="Schedule Service"
              url="https://calendly.com/em-eggers/service"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
