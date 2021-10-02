import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const CovidPage = () => {
  const data = useStaticQuery(graphql`
    query COVID {
      allContentfulRichContent(
        filter: { id: { eq: "951b6fd1-7a29-5b7c-ac21-36aea42c0a2f" } }
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
        title="COVID"
        description="Information about the latest COVID procedures at our events"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>COVID Policy</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default CovidPage
