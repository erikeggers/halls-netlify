import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Button from "../../components/button"

const Container = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: 50% 50%;
`

const HeroH2 = styled.h2`
  max-width: 555px;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${props =>
    props.breakpoints.sm ? "30px" : props.breakpoints.md ? "42px" : "48px"};
  font-size: ${props =>
    props.breakpoints.sm ? "28px" : props.breakpoints.md ? "40px" : "46px"};
  color: #fff;
  font-family: Montserrat;
`
const HeroText = styled.p`
  margin-bottom: 20px;
  max-width: 555px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 15px;
  letter-spacing: 0;
  line-height: 24px;
`
const HeroButton = styled.div`
  width: 200px;
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

  const imageData = data.indexHero.childImageSharp.fluid

  const backgroundFluidImage = [
    imageData,
    `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #101426 100%)`,
  ].reverse()

  return (
    <Container
      Tag="section"
      className="hero-image"
      fluid={backgroundFluidImage}
      breakpoints={breakpoints}
      style={{ height: breakpoints.md ? "425px" : "600px" }}
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
            <Link to="/schedule">
              <HeroButton>
                <Button
                  text="Schedule Service"
                  color="#8CBD45"
                  padding="18px 24px"
                  fontLarge={true}
                />
              </HeroButton>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
