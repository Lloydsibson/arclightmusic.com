import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const RefundAndReturnsPage = () => {
  return (
    <Layout>
      <Seo
        title="Refunds and Returns"
        description="Information on our refunds and returns policy"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Refunds & Return</h1>
            <p>Text here...</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RefundAndReturnsPage
