import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const RefundAndReturnsPage = () => {
  const data = useStaticQuery(graphql`
    query RRPage {
      allContentfulRichContent(
        filter: { id: { eq: "a6876718-14b4-5b1f-8724-d55ff3ff51cd" } }
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
        title="Refunds and Returns"
        description="Information on our refunds and returns policy"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Refunds & Return</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default RefundAndReturnsPage
