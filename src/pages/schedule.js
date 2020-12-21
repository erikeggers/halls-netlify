import React from "react"
import Layout from "../components/layout"
import { InlineWidget, PopupWidget } from "react-calendly"

const Schedule = () => (
  <Layout>
    <div>
      <h1>Schedule Service</h1>
      <p>This is Schedule Service</p>
      <InlineWidget url="https://calendly.com/em-eggers/service" />

      <PopupWidget
        color="#8CBD45"
        text="Schedule Service"
        textColor="#ffffff"
        url="https://calendly.com/em-eggers/service"
      />
    </div>
  </Layout>
)

export default Schedule
