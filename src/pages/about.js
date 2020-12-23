import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Team from "../components/about/team"
import AboutHalls from "../components/about/about_halls"
import ServicesReviews from "../components/services/services_reviews"

const About = () => (
  <Layout>
    <Hero image="aboutUs" text="About Us" />
    <AboutHalls />
    <Team />
    <ServicesReviews />
  </Layout>
)

export default About
