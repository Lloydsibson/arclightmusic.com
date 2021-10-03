import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArclightPromotionsPage = () => {
  const data = useStaticQuery(graphql`
    query APPage {
      allContentfulRichContent(
        filter: { id: { eq: "f25253ce-b949-5ecd-b1f5-f71a8ca8a2ba" } }
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
        title="Arclight Promotions"
        description="Information on our events division"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Arclight Promotions</h1>
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
