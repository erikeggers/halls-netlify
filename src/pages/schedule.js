import React from "react"
import Layout from "../components/layout"
import { InlineWidget } from "react-calendly"
import Hero from "../components/hero"

const Schedule = () => (
  <Layout>
    <Hero image="services" text="Schedule Service" />
    <div style={{ marginTop: "-56px" }}>
      <InlineWidget
        pageSettings={{
          backgroundColor: "F5F1E0",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "8CBD45",
          textColor: "4d5055",
        }}
        url="https://calendly.com/royhallstreeservice/service"
        styles={{ height: "1200px" }}
      />
    </div>
  </Layout>
)

export default Schedule
