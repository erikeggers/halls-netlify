import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./logo"
import styled from "styled-components"
// import Button from "./button"
import { PopupText } from "react-calendly"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const HeaderContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  background: #faf7ee;
`

const ItemContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 1.18rem 2.5rem;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  margin-right: 56px;
  min-width: 200px;
  max-width: 200px;
`
const LinkContainer = styled.div`
  .link-text {
    margin-right: 40px;
    color: #7d5e40;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.6px;
    line-height: 16px;
    text-transform: uppercase;
  }
`
const ContactContainer = styled.div`
  display: flex;
  text-align: center;
  margin-right: 24px;
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

const SubHeader = styled.div`
  text-align: center;
`

const SubHeaderText = styled.span`
  color: #7d5e40;
  font-family: "Open Sans";
  font-size: 10px;
  letter-spacing: 0;
  line-height: 21px;
  margin-right: 4px;
`

const SubHeaderPhone = styled.a`
  color: #f36d4d;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 16px;
`

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint()
  console.log(breakpoints)
  return (
    <header>
      <HeaderContainer>
        <ItemContainer>
          <Left>
            <LogoContainer>
              <Link to="/">
                <Logo alt={siteTitle} />
              </Link>
            </LogoContainer>

            {!breakpoints.md && (
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
              </LinkContainer>
            )}
          </Left>
          <Right>
            {!breakpoints.sm && (
              <>
                <ContactContainer>
                  <div>
                    <div className="contact-text">
                      For a FREE quote contact:
                    </div>
                    <a href="tel:4788089338" className="phone-number">
                      (478) 808-9338
                    </a>
                  </div>
                </ContactContainer>
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
                    borderRadius: "20px",
                    boxShadow: "0 4px 8px 0 rgba(35, 35, 35, 0.14)",
                    padding: "12px 18px",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "0",
                    color: "#ffffff",
                    lineHeight: "normal",
                  }}
                  text="Schedule Service"
                  url="https://calendly.com/em-eggers/service"
                />
              </>
            )}
          </Right>
        </ItemContainer>
      </HeaderContainer>
      {breakpoints.sm && (
        <SubHeader>
          <SubHeaderText>For a free qoute contact:</SubHeaderText>
          <SubHeaderPhone href="tel:4788089338">(478) 808-9338</SubHeaderPhone>
        </SubHeader>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
