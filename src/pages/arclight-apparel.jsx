import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const ArclightApparelPage = () => {
  return (
    <Layout>
      <Seo title="Arclight Apparel" />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Arclight Apparel</h1>
            <h2>Our Merchandise Division</h2>
            <p>Text here...</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArclightApparelPage
