import * as React from "react"

import Layout from "../components/layout"

import UpcomingEvents from "../components/upcoming-events"
import Seo from "../components/seo"

import "normalize.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <UpcomingEvents />
  </Layout>
)

export default IndexPage
