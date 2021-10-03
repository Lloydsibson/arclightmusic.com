import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const RACPage = () => {
  const data = useStaticQuery(graphql`
    query RACPage {
      allContentfulRichContent(
        filter: { id: { eq: "fa096131-7a79-5075-b382-9bc4c5cade4a" } }
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
        title="RAC Festival"
        description="Information on the Rage Against Cancer Festival"
      />
      <div className="information-page rac">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <div className="rac-logo">
              <StaticImage
                src="../images/rac-logo.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="rac plectrum logo"
              />
            </div>
            <h1>Rage Against Cancer Festival</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default RACPage
