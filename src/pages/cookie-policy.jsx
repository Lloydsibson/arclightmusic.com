import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { Link } from "gatsby"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArclightPromotionsPage = () => {
  const data = useStaticQuery(graphql`
    query CookiePage {
      allContentfulRichContent(
        filter: { id: { eq: "715ae7c6-5c35-5451-937d-7ca5d14cb4a9" } }
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
        title="Cookie Policy"
        description="Information on our cookie policy and how these are used throughout our website"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Cookie Policy</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ArclightPromotionsPage
