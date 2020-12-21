import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexHero from "../components/index/index_hero"
import Services from "../components/index/services"
import Featured from "../components/index/featured"
import IndexReviews from "../components/index/index_reviews"
import WhyUse from "../components/index/why_use"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
    <Services />
    <IndexReviews />
    <Featured />
    <WhyUse />
  </Layout>
)

export default IndexPage
