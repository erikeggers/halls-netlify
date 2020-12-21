import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexHero from "../components/index/index_hero"
import Services from "../components/index/services"
import Featured from "../components/index/featured"
import IndexReviews from "../components/index/index_reviews"
import WhyUse from "../components/index/why_use"

import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        src={withPrefix("https://apps.elfsight.com/p/platform.js")}
        type="text/javascript"
        defer
      />
    </Helmet>
    <SEO title="Home" />
    <IndexHero />
    <Services />
    <IndexReviews />
    <Featured />
    <WhyUse />
  </Layout>
)

export default IndexPage
