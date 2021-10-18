import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import ArclightApparelSocialShareThumbnail from "../images/social-share-thumnail-apparel.jpg"

const ArclightApparelPage = () => {
  const data = useStaticQuery(graphql`
    query AAPage {
      allContentfulRichContent(
        filter: { id: { eq: "81188dc1-d3d7-5fb5-88c7-a6334d614c1e" } }
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
        title="Arclight Apparel"
        description="Information on our merchandise division"
        socialImage={ArclightApparelSocialShareThumbnail}
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Arclight Apparel</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ArclightApparelPage
