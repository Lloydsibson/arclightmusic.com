import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import InfoNav from "../components/info-nav"

const PartnersPage = () => {
  return (
    <Layout>
      <Seo title="Partners" />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Partners</h1>
            <h2>Become a Partner</h2>
            <p>
              We work very closely with our partners to make sure we can offer
              the best to new, young musicians and to the community as a whole.
              All of our partners are commited to the same cause and we are very
              proud to have each of their names next to ours.
            </p>
            <p>
              If you are interested in becoming a partner, please contact us via
              the Contact button in the website navigation, or{" "}
              <Link to="/contact-us">click here</Link> and someone will be in
              touch!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PartnersPage
