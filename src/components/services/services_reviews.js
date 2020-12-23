import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const Container = styled.div`
  height: 200px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ServicesReviews = () => (
  <Container>
    <Helmet>
      <script
        src={withPrefix("https://apps.elfsight.com/p/platform.js")}
        type="text/javascript"
        defer
      />
    </Helmet>
    <div className="container">
      <div className="elfsight-app-433eebcf-74b4-4126-94e1-9841a48907ea"></div>
    </div>
  </Container>
)

export default ServicesReviews
