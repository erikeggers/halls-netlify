import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

const Container = styled.div`
  background-color: #faf7ee;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
  padding-top: 63px;
`

const IndexReviews = () => (
  <>
    <Helmet>
      <script
        src={withPrefix("https://apps.elfsight.com/p/platform.js")}
        type="text/javascript"
        defer
      />
    </Helmet>
    <Container>
      <h3 style={{ marginBottom: 0 }}>Reviews</h3>
      <div className="container elfsight-app-8ac75008-3c38-4f9d-88db-dbb698aea339"></div>
    </Container>
  </>
)

export default IndexReviews
