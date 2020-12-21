import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import FaqContainer from "../components/faq/faq_container"

const Faq = () => (
  <Layout>
    <Hero image="faq" text="FAQ" />
    <FaqContainer />
  </Layout>
)

export default Faq
