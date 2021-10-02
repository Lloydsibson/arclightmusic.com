import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import { useStaticQuery, graphql } from "gatsby"

import InfoNav from "../components/info-nav"

// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { renderRichText } from "gatsby-source-contentful/rich-text"

const ArtistsPage = () => {
  // const data = useStaticQuery(graphql`
  //   query ArtistPage {
  //     allContentfulInformationPages(
  //       filter: { id: { eq: "991b48a3-4b95-55d0-afd9-93ec3f73ac07" } }
  //     ) {
  //       edges {
  //         node {
  //           pageText {
  //             raw
  //           }
  //           id
  //         }
  //       }
  //     }
  //   }
  // `)

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

  // const post = data.allContentfulInformationPages.edges[0].node.pageText
  //console.log(data.allContentfulInformationPages.edges[0].node.pageText.raw)
  //console.log(post)
  //console.log(data.allContentfulBand.nodes)

  // const output = renderRichText(post)
  // console.log(output)

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
            {/* {bands.map((x, key) => (
              <p key={key}>{x.name}</p>
            ))}
             */}
            {/* {output} */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistsPage

// function BlogPostTemplate({ data }) {
//   const { bodyRichText } = data.contentfulBlogPost

//   return <div>{bodyRichText && renderRichText(richTextField, options)}</div>
// }
