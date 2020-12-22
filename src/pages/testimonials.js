import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

const Testimonials = () => (
  <Layout>
    <Helmet>
      <script
        src={withPrefix("https://apps.elfsight.com/p/platform.js")}
        type="text/javascript"
        defer
      />
    </Helmet>
    <Hero image={"testimonials"} text="Testimonials" />
    <div style={{ marginBottom: 64 }}>
      <div className="elfsight-app-4b64ebdd-a3a6-49f2-864a-90edd93bb06e"></div>
    </div>
  </Layout>
)

export default Testimonials
