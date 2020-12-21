import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 1rem 1.62rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  border: 1px solid #f7f7f7;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 9px 14px 0 rgba(35, 35, 35, 0.14);
`

const ServiceIcon = styled(BackgroundImage)`
  height: 100px;
  width: 100px;
`
const Label = styled.span`
  color: #7d5e40;
  margin-top: 19.6px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 16px;
  text-transform: uppercase;
`
const ServicesCard = props => {
  const data = useStaticQuery(graphql`
    query {
      treeRemoval: file(relativePath: { eq: "tree_removal.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      treeTrimming: file(relativePath: { eq: "tree_trimming.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stormDamage: file(relativePath: { eq: "storm_damage.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      treeShaping: file(relativePath: { eq: "tree_shaping.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stumpGrinding: file(relativePath: { eq: "stump_grinding.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData =
    props.image === "treeRemoval"
      ? data.treeRemoval.childImageSharp.fluid
      : props.image === "treeTrimming"
      ? data.treeTrimming.childImageSharp.fluid
      : props.image === "stormDamage"
      ? data.stormDamage.childImageSharp.fluid
      : props.image === "treeShaping"
      ? data.treeShaping.childImageSharp.fluid
      : props.image === "stumpGrinding"
      ? data.stumpGrinding.childImageSharp.fluid
      : null

  return (
    <Container>
      <ServiceIcon className="card-img-top" fluid={imageData} />
      <Label>{props.text}</Label>
    </Container>
  )
}

export default ServicesCard
