import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const ArtistsPage = () => {
  return (
    <Layout>
      <Seo title="Artists" />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Artists</h1>
            <p>Text here...</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistsPage
