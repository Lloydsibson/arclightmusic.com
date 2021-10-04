import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { Link } from "gatsby"

import InfoNav from "../components/info-nav"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { StaticImage } from "gatsby-plugin-image"

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
      <div className="information-page partners">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Partners</h1>
            <div className="partner-container">
              <a href="https://www.stayfreemusic.co.uk/">
                <div className="partner-container__card">
                  <div className="partner-logo">
                    <StaticImage
                      src="../images/stayfree-logo.png"
                      width={100}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="stayfree"
                    />
                  </div>
                  <div className="partner-info">
                    <h2>Stayfree</h2>
                  </div>
                </div>
              </a>
              <a href="https://getintheshed.co.uk/">
                <div className="partner-container__card">
                  <div className="partner-logo">
                    <StaticImage
                      src="../images/shed-logo.png"
                      width={100}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="the shed logo"
                    />
                  </div>
                  <div className="partner-info">
                    <h2>The Shed</h2>
                  </div>
                </div>
              </a>
              <a href="https://www.lloydsibson.com">
                <div className="partner-container__card">
                  <div className="partner-logo">
                    <StaticImage
                      src="../images/monocode-logo.png"
                      width={100}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="monocode logo"
                    />
                  </div>
                  <div className="partner-info">
                    <h2>Monocode</h2>
                  </div>
                </div>
              </a>
            </div>
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
