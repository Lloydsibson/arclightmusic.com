import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPage {
      allContentfulRichContent(
        filter: { id: { eq: "8fb20a8c-30bb-501c-bd1e-cc44de3d2ff5" } }
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
        title="About"
        description="Information about Arclight Music, our mission and goals"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>About</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
