import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Team from "../components/about/team"
import AboutHalls from "../components/about/about_halls"
import AboutReviews from "../components/about/about_reviews"

const About = () => (
  <Layout>
    <Hero image="aboutUs" text="About Us" />
    <AboutHalls />
    <Team />
    <AboutReviews />
  </Layout>
)

export default About
