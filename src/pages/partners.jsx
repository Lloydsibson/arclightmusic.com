import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { Link } from "gatsby"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PartnersPage = () => {
  const data = useStaticQuery(graphql`
    query PartnersPage {
      allContentfulRichContent(
        filter: { id: { eq: "7db430cb-ef0d-5135-9972-42eb6a6e4448" } }
      ) {
        edges {
          node {
            pageText {
              raw
            }
          }
        }
      }
    }
  `)

  const contentfulCMSPost = data.allContentfulRichContent.edges[0].node.pageText
  return (
    <Layout>
      <Seo
        title="Partners"
        description="Information on becoming an official partner"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Partners</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default PartnersPage
