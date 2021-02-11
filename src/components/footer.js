import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

const FooterContainer = styled.footer`
  background-color: #faf7ee;
  padding-top: 2rem;
`
const FooterText = styled.div`
  font-family: "Open Sans";
  font-size: 13px;
  letter-spacing: 0;
  color: #7d5e40;
  font-weight: normal;
  line-height: 1;
  p {
    font-family: "Open Sans";
    font-size: 13px;
  }
`
const Copyright = styled.div`
  text-align: center;
  padding: 28px 0 18px 0;
  border-top: 1px solid #e3dccf;
  margin-top: 20px;
`

const LinkContainer = styled.div`
  display: flex;

  ${props =>
    props.breakpoint
      ? css`
          flex-direction: column;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid #e3dccf;
          .link-text {
            padding: 12px 0;
          }
        `
      : css`
          justify-content: flex-end;
          align-items: center;
          .link-text:not(:last-of-type) {
            margin-right: 40px;
          }
          .link-text:last-of-type {
            margin-right: 20px;
          }
        `}
  }

  .link-text {
    color: #7d5e40;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.6px;
    line-height: 16px;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

const ContactContainer = styled.div`
  display: flex;

  ${props =>
    props.breakpoint &&
    css`
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 18px;
    `}

  .contact-text {
    color: #7d5e40;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 21px;
  }
  .phone-number {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 32px;
  }
`
const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  a {
    margin-left: 8px;
  }
`
const IconContainer = styled.a`
  display: flex;
  margin-top: ${props => (props.breakpoint ? "8px" : null)};
  justify-content: ${props => (!props.breakpoint ? "flex-end" : null)};
  width: 38px;
  border-left: ${props => (!props.breakpoint ? "1px solid #e3dccf" : null)};
`

const PhoneIcon = styled(BackgroundImage)`
  width: 24px;
  height: 24px;
`

const FacebookIcon = styled(BackgroundImage)`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneIcon: file(relativePath: { eq: "phone_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const breakpoints = useBreakpoint()

  return (
    <FooterContainer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <ContactContainer breakpoint={breakpoints.featured}>
              <div>
                <FooterText>For a FREE quote contact:</FooterText>
                <PhoneContainer>
                  <PhoneIcon fluid={data.phoneIcon.childImageSharp.fluid} />
                  <a href="tel:4788089338" className="phone-number">
                    (478) 808-9338
                  </a>
                </PhoneContainer>
              </div>
            </ContactContainer>
          </div>
          <div className="col-sm-12 col-md-6">
            <LinkContainer breakpoint={breakpoints.featured}>
              <Link to="/services" className="link-text">
                Services
              </Link>
              <Link to="/about" className="link-text">
                About Us
              </Link>
              <Link to="/faq" className="link-text">
                FAQ
              </Link>
              <Link to="/testimonials" className="link-text">
                Testimonials
              </Link>
              <IconContainer
                href="https://www.facebook.com/hallstreeservice/"
                target="_blank"
                breakpoint={breakpoints.featured}
              >
                <FacebookIcon fluid={data.facebook.childImageSharp.fluid} />
              </IconContainer>
            </LinkContainer>
          </div>
        </div>
        <Copyright>
          <FooterText>
            {!breakpoints.featured ? (
              <p>
                Copyright {new Date().getFullYear()}. Halls Tree Service. All
                Rights Reserved.
              </p>
            ) : (
              <>
                <p>Copyright {new Date().getFullYear()}. Halls Tree Service.</p>
                <p>All Rights Reserved.</p>
              </>
            )}
          </FooterText>
        </Copyright>
      </div>
    </FooterContainer>
  )
}

export default Footer
