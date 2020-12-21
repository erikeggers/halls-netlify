import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ServicesContainer from "../components/services/services_container"
import ServicesCta from "../components/services/services_cta"
import ServicesReviews from "../components/services/services_reviews"

const Services = () => (
  <Layout>
    <Hero image="services" text="Services" />
    <ServicesContainer />
    <ServicesCta />
    <ServicesReviews />
  </Layout>
)

export default Services
