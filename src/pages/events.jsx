import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EventsPage = () => {
  return (
    <Layout>
      <Seo
        title="Events"
        description="Buy tickets for upcoming APUK events, see the latest event information and 
        find out more about your favourite bands and venues..."
      />
      <div className="information-page"></div>
    </Layout>
  )
}

export default EventsPage
