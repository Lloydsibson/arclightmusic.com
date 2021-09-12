import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Privacy Policy</h1>
            <p>
              https://termly.io/resources/templates/privacy-policy-template/
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
