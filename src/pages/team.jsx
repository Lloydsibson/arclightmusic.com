import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

import { StaticImage } from "gatsby-plugin-image"

// import { useStaticQuery, graphql } from "gatsby"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const TeamPage = () => {
  // const data = useStaticQuery(graphql`
  //   query TeamPage {
  //     allContentfulRichContent(
  //       filter: { id: { eq: "7eb167ce-a86a-59f2-a821-b1c500bba63b" } }
  //     ) {
  //       edges {
  //         node {
  //           pageText {
  //             raw
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const contentfulCMSPost = data.allContentfulRichContent.edges[0].node.pageText

  // const renderOptions = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: node => {
  //       console.log(node)
  //       return (
  //         <>
  //           <img src={node} />
  //         </>
  //       )
  //     },
  //   },
  // }

  //console.log(contentfulCMSPost.raw)

  return (
    <Layout>
      <Seo
        title="Team"
        description="Meet the Arclight Music team and the people behind the events"
      />
      <div className="information-page team">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>Team</h1>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-cam.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Cameron Hamilton on stage"
                />
              </div>
              <div className="team-info">
                <h2>Cameron Hamilton</h2>
                <p>Founder</p>
                <p>
                  Having been performing from the young age of 13 and working
                  within education since 21, Cameron founded Arclight to make a
                  difference in the world of music. Starting with giving young
                  musicians the opportunities he never had when first starting
                  and then aiding in supporting music in school. The entire APUK
                  project has very quickly grown bigger than ever expected.
                </p>
              </div>
            </div>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-lloyd.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Lloyd Sibson on stage"
                />
              </div>
              <div className="team-info">
                <h2>Lloyd Sibson</h2>
                <p>Digital Agency</p>
                <p>
                  Founder of Monocode and an experienced musician in his own
                  right. Creative is an understatement. He’s worked with Google,
                  Rolex, Gucci and other prestigious brands and brings with him
                  several years of design, editing and web development
                  experience. Everything you see on the APUK site and media he’s
                  created, or help develop.
                </p>
              </div>
            </div>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-dodd.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Kai Dodds at home"
                />
              </div>
              <div className="team-info">
                <h2>Kai Dodds</h2>
                <p>Event Manager</p>
                <p>
                  Being a musician himself and seeing the difficulties trying to
                  get onto the live music scene, Kai wanted to be involved from
                  the start to the point of helping promote events before
                  becoming an official member of the team. Kai has been
                  instrumental in APUK’s early days success and the general
                  running of each event on the day.
                </p>
              </div>
            </div>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-vic.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Victoria on stage"
                />
              </div>
              <div className="team-info">
                <h2>Victoria May</h2>
                <p>Event Manager</p>
                <p>
                  Vocalist to One Still Standing and founder of Rage Against
                  Cancer Festival. After a long discussion following Vic
                  attending our first ever solo event, she very quickly wanted
                  to be a part of the team to help promote local music and make
                  a difference. Alongside Owen, she has been a key player in a
                  very rapid growth overnight and will be for the future of
                  Arclight.
                </p>
              </div>
            </div>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-owen.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Owen outside in street"
                />
              </div>
              <div className="team-info">
                <h2>Owen Trott</h2>
                <p>Event Manager</p>
                <p>
                  Guitarist to One Still Standing and Event Manager of Rage
                  Against Cancer Festival. Owen joined along with Vic having
                  been a part of the same conversation. Being a young musician
                  himself he has seen the difficulties live music now brings.
                  Although his time in the scene has been short, one thing he
                  does not lack is determination and we cannot wait to see the
                  difference he will make.
                </p>
              </div>
            </div>
            <div className="information__container">
              <div className="team-photo">
                <StaticImage
                  src="../images/team-photo-stock.jpg"
                  width={180}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Arclight music logo"
                />
              </div>
              <div className="team-info">
                <h2>Position Vacancy</h2>
                <p>Photographer</p>
                <p>
                  Due to the recent departures, we have space available on the
                  team. If interested in joining us to become a part of
                  something greater, please reach out to us on the contact page,
                  facebook or via&nbsp;
                  <a href="mailto:arclightpromotionsuk@gmail.com">
                    arclightpromotionsuk@gmail.com
                  </a>
                </p>
              </div>
            </div>
            {/* *** CONTENTFUL CMS *** */}
            {/* {renderRichText(contentfulCMSPost, renderOptions)} */}
            {/* *** END *** */}
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
