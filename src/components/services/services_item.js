import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 240px;
  margin-bottom: 25px;
  @media (max-width: 320px) {
    height: 220px;
    width: 220px;
  }
`
const ServiceImage = styled(BackgroundImage)`
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: 100%;
  margin-bottom: 56px;
`

const CardTitle = styled.h4`
  margin-bottom: 8px;
  color: #79603e;
  font-weight: bold;
  font-family: Montserrat;
  font-size: 26px;
`

const CardText = styled.p`
  color: #424440;
`
const ServicesItem = props => (
  <div className="col-sm-6 col-lg-4 mb-4">
    <ImageContainer>
      <ServiceImage fluid={props.image} style={{ borderRadius: "8px" }} />
    </ImageContainer>
    <CardTitle>{props.title}</CardTitle>
    <CardText>{props.desc}</CardText>
  </div>
)

export default ServicesItem
