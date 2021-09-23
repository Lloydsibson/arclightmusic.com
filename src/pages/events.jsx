import React from "react"

//import Link from "gatsby"
import "./events.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

import EventPageEventbriteAPI from "../components/api/events-eventbrite-api"

const EventsPage = () => {
  return (
    <Layout>
      <Seo
        title="Events"
        description="Buy tickets for upcoming APUK events, see the latest event information and 
        find out more about your favourite bands and venues..."
      />
      <EventPageEventbriteAPI />
    </Layout>
  )
}

export default EventsPage
