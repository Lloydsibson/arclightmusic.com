import * as React from "react"

import Layout from "../components/layout"

import UpcomingEvents from "../components/upcoming-events"
import HomePageCarousel from "../components/hp-carousel"
import Seo from "../components/seo"

import "normalize.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <UpcomingEvents />
      <HomePageCarousel />
    </Layout>
  )
}

export default IndexPage
