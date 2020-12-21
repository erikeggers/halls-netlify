import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ServicesCard from "./services_card"
import Button from "../../components/button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.64rem;
`

const Text = styled.h3`
  margin-bottom: 0;
  color: #79603e;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ServicesCardContainer = () => (
  <Container>
    <div className="container">
      <div className="row">
        <ButtonContainer className="col-12 mb-4">
          <Text>Our Services</Text>
          <Link to="/services">
            <Button
              color="#F4F8ED"
              text="Show All"
              padding="10px 18px"
              secondary
            />
          </Link>
        </ButtonContainer>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <CardContainer>
          <ServicesCard image="treeRemoval" text="Tree Removal" />
          <ServicesCard image="treeTrimming" text="Tree Trimming" />
          <ServicesCard image="stormDamage" text="Storm Damage" />
          <ServicesCard image="treeShaping" text="Tree Shaping" />
          <ServicesCard image="stumpGrinding" text="Stump Grinding" />
        </CardContainer>
      </div>
    </div>
    {/* <div className="container">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-sm-4 col- mt-4">
          <div className="card">
            <ServicesCard />
          </div>
        </div>
        <div className="col-sm-4 mt-4">
          <div className="card">
            <ServicesCard />
          </div>
        </div>
        <div className="col-sm-4 mt-4">
          <div className="card">
            <ServicesCard />
          </div>
        </div>
        <div className="col-sm-4 mt-4">
          <div className="card">
            <ServicesCard />
          </div>
        </div>
        <div className="col-sm-4 mt-4">
          <div className="card">
            <ServicesCard />
          </div>
        </div>
      </div>
    </div> */}
  </Container>
)

export default ServicesCardContainer
