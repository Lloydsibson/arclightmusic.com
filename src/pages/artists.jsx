import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { useStaticQuery, graphql } from "gatsby"

import InfoNav from "../components/info-nav"

// import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArtistsPage = () => {
  const data = useStaticQuery(graphql`
    query ArtistsPage {
      allContentfulRichContent(
        filter: { id: { eq: "36938fd2-1124-5a92-9730-91a9de2cd12f" } }
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

  // const Bold = ({ children }) => <span className="bold">{children}</span>
  // const Text = ({ children }) => <p className="align-center">{children}</p>

  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       return (
  //         <>
  //           <h2>Embedded Asset</h2>
  //           <pre>
  //             <code>{JSON.stringify(node, null, 2)}</code>
  //           </pre>
  //         </>
  //       )
  //     },
  //   },
  // }

  return (
    <Layout>
      <Seo
        title="Artists"
        description="Information on working with us as an artist"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Artists</h1>
            {/* *** CONTENTFUL CMS *** */}
            {renderRichText(contentfulCMSPost)}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistsPage
