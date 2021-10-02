import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./404.scss"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { StaticImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query PageNotFound {
      allContentfulRichContent(
        filter: { id: { eq: "3e9574e7-2dd8-503e-8148-e1c788d0abc8" } }
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

  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <Seo
        title="404 Error"
        description="Page not found. Oops! Something went wrong"
      />
      <div className="fourOfour-page">
        <div className="fourOfour-page__inner-container">
          <div className="fourOfour-image">
            <StaticImage
              src="../images/404.png"
              width={600}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="venue stage"
            />
          </div>
          <div className="fourOfour-message">
            <h1>Page not found</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
            <div className="fourOfour-message__btns">
              <button id="goback" onClick={() => goBackHandler()}>
                Back
              </button>
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
