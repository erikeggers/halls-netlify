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
    <div>
      <div className="elfsight-app-183e61d6-4804-480e-8f42-ac8da9ca0863"></div>
    </div>
  </Layout>
)

export default Testimonials
