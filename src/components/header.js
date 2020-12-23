import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Button from "./button"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Logo from "../images/logo.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"

const HeaderWrapper = styled.header`
  ${props =>
    props.navOpen &&
    (props.medium || props.small) &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      /* transition: 0.2s;
      transition-delay: 0.2s; */
      overflow: hidden;
      background: #faf7ee;
    `}
`
const HeaderContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  background: #faf7ee;
  position: relative;
`

const ItemContainer = styled.nav`
  margin: 0 auto;
  max-width: 1440px;
  padding: ${props => (props.breakpoint ? "1.18rem 1.5rem" : "1.18rem 2.5rem")};
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
  img {
    width: ${props => (props.breakpoint ? "130px" : "200px")};
  }
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
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  padding: 4px 0;
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
const MobileNav = styled.nav`
  background-color: #faf7ee;
  transition: 0.2s;
  transition-delay: 0.2s;
  text-align: center;
  padding: 16px 0;
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.14);
`
const NavButton = styled.div`
  padding: ${props => (props.margin ? "0 15px" : null)};
  margin-bottom: ${props => (props.margin ? "15px" : null)};
`

const MobileLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #7d5e40;
    padding: 20px 0;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.6px;
    line-height: 16px;
    text-transform: uppercase;
    border-bottom: 1px solid #e3dccf;
    :first-of-type {
      border-top: 1px solid #e3dccf;
    }
  }
`

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <HeaderWrapper
      navOpen={navOpen}
      small={breakpoints.sm}
      medium={breakpoints.md}
    >
      <HeaderContainer>
        <ItemContainer breakpoint={breakpoints.sm || breakpoints.md}>
          <Left>
            <LogoContainer breakpoint={breakpoints.sm}>
              <Link to="/">
                <img src={Logo} alt={siteTitle} />
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

                <Link to="/schedule">
                  <NavButton>
                    <Button
                      text="Schedule Service"
                      color="#8CBD45"
                      padding="12px 18px"
                    />
                  </NavButton>
                </Link>
              </>
            )}
            {(breakpoints.sm || breakpoints.md) && (
              <div
                onClick={() => setNavOpen(!navOpen)}
                onKeyDown={() => setNavOpen(!navOpen)}
                role="button"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                {navOpen ? (
                  <img
                    src={Close}
                    alt="Menu Button"
                    style={{ height: "28px", width: "28px", marginLeft: 24 }}
                  />
                ) : (
                  <img
                    src={Menu}
                    alt="Menu Button"
                    style={{ height: "28px", width: "28px", marginLeft: 24 }}
                  />
                )}
              </div>
            )}
          </Right>
        </ItemContainer>
      </HeaderContainer>
      {breakpoints.sm && (
        <SubHeader>
          <SubHeaderText>For a FREE qoute contact:</SubHeaderText>
          <SubHeaderPhone href="tel:4788089338">(478) 808-9338</SubHeaderPhone>
        </SubHeader>
      )}
      {(breakpoints.sm || breakpoints.md) && navOpen && (
        <>
          <MobileNav>
            {breakpoints.sm && (
              <Link to="/schedule">
                <NavButton margin>
                  <Button
                    text="Schedule Service"
                    color="#8CBD45"
                    padding="12px 18px"
                  />
                </NavButton>
              </Link>
            )}
            <MobileLinkContainer>
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
            </MobileLinkContainer>
          </MobileNav>
        </>
      )}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
