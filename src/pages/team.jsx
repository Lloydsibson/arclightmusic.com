import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamPage {
      allContentfulRichContent(
        filter: { id: { eq: "7eb167ce-a86a-59f2-a821-b1c500bba63b" } }
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
        title="Team"
        description="Meet the Arclight Music team and the people behind the events"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Team</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
