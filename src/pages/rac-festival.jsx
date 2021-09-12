import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const RACPage = () => {
  return (
    <Layout>
      <Seo title="RAC Festival" />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Rage Against Cancer Festival</h1>
            <p>
              Arclight Music are proud to welcome, along with our new team, Rage
              Against Cancer Festival to the family.
            </p>
            <p>
              For 2 years now, founders Victoria May & Jamie Bee, have
              successfully ran RAC Festival with help from friends and fellow
              musicians Owen Trott & David Dyson allowing them to make a
              substantial donation to the Teenage Cancer Trust each year.
            </p>
            <p>
              With the support of Arclight Music and our family of partners, RAC
              Festival is set to have it’s biggest year yet with more bands than
              ever before jumping on board to be a part of this great cause.
            </p>
            <p>
              All profits from the festival will go directly to Teenage Cancer
              Trust as always and we couldn’t be more proud to be a part of this
              incredible annual festival. We will of course be bring the
              Arclight ethos with it and be having some younger, newer artists
              on the lineup as well to help bring them into the spotlight.
            </p>
            <p>
              For live updates on RAC Festival and Teenage Cancer Trust, head to
              their official pages and tickets can be purchased in advance at
              the bottom of this page with discounts available for tickets
              spanning multiple days!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RACPage
