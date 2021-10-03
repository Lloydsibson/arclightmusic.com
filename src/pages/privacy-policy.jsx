import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { Link } from "gatsby"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPage {
      allContentfulRichContent(
        filter: { id: { eq: "a2adab23-1df0-533f-8e57-5563d8915951" } }
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
        title="Privacy Policy"
        description="Information on our privacy policy for the Arclight Music website"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Privacy Policy</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
