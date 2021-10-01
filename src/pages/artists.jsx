import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const ArtistsPage = () => {
  return (
    <Layout>
      <Seo
        title="Artists"
        description="Information on working with us as an artist"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Artists</h1>
            <p>Text here...</p>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistsPage
