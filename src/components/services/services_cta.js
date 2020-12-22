import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../../components/button"

const Container = styled.div`
  width: 100%;
  background-color: #f36d4d;
  border-radius: 8px;
  padding: 32px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: center;
  }
`
const CtaText = styled.div`
  color: #fff;
  margin-right: 20px;
  @media screen and (max-width: 944px) {
    max-width: 300px;
  }
  @media (max-width: 786px) {
    text-align: center;
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
`
const CtaTitle = styled.div`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 26px;
`
const CtaSubtext = styled.p`
  font-size: 15px;
  letter-spacing: 0;
  margin-bottom: 0;
  margin-top: 10px;
`

const ContactContainer = styled.div`
  display: flex;
  text-align: center;
  margin-right: 20px;
  @media (max-width: 786px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .contact-text {
    color: #fff;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 21px;
  }
  .phone-number {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 32px;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: center;
  }
`
const ServicesCta = () => (
  <div className="container">
    <Container>
      <Row>
        <CtaText className="">
          <CtaTitle>Don’t see what you need? No problem.</CtaTitle>
          <CtaSubtext>
            Whatever your needs are, we can help. Call us today!
          </CtaSubtext>
        </CtaText>
        <Right className="">
          <ContactContainer>
            <div>
              <div className="contact-text">For a FREE quote contact:</div>
              <a href="tel:4788089338" className="phone-number">
                (478) 808-9338
              </a>
            </div>
          </ContactContainer>

          <Link to="/schedule">
            {/* <NavButton margin> */}
            <Button
              text="Schedule Service"
              color="#8CBD45"
              padding="12px 18px"
            />
            {/* </NavButton> */}
          </Link>
        </Right>
      </Row>
    </Container>
  </div>
)

export default ServicesCta
