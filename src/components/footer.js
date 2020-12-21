import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

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
`
const Copyright = styled.div`
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #e3dccf;
  margin-top: 20px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .link-text {
    color: #7d5e40;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.6px;
    line-height: 16px;
    text-transform: uppercase;
  }
  .link-text:not(:last-of-type) {
    margin-right: 40px;
  }
  .link-text:last-of-type {
    margin-right: 20px;
  }
`

const ContactContainer = styled.div`
  display: flex;
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
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 72px;
  border-left: 1px solid #e3dccf;
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

const InstagramIcon = styled(BackgroundImage)`
  width: 24px;
  height: 24px;
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

  return (
    <FooterContainer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm">
            <ContactContainer>
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
          <div className="col-sm">
            <LinkContainer>
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
              <IconContainer>
                <InstagramIcon fluid={data.instagram.childImageSharp.fluid} />
                <FacebookIcon fluid={data.facebook.childImageSharp.fluid} />
              </IconContainer>
            </LinkContainer>
          </div>
        </div>
        <Copyright>
          <FooterText>
            Copyright {new Date().getFullYear()}. Halls Tree Service. All Rights
            Reserved.
          </FooterText>
        </Copyright>
      </div>
    </FooterContainer>
  )
}

export default Footer
