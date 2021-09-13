import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const TeamPage = () => {
  return (
    <Layout>
      <Seo
        title="Team"
        description="Meet the Arclight Music team and the people behind the events"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <div className="information">
            <h1>Team</h1>
            <h2>Cameron Hamilton</h2>
            <p>Founder</p>
            <p>
              Having been performing from the young age of 13 and working within
              education since 21, Cameron founded Arclight to make a difference
              in the world of music. Starting with giving young musicians the
              opportunities he never had when first starting and then aiding in
              supporting music in school. The entire APUK project has very
              quickly grown bigger than ever expected.
            </p>
            <h2>Lloyd Sibson</h2>
            <p>Digital Agency</p>
            <p>
              Founder of Monocode and an experienced musician in his own right.
              Creative is an understatement. He’s worked with Google, Rolex,
              Gucci and other prestigious brands and brings with him several
              years of design, editing and web development experience.
              Everything you see on the APUK site and media he’s created, or
              help develop.
            </p>
            <h2>Kai Doods</h2>
            <p>Event Manager</p>
            <p>
              Being a musician himself and seeing the difficulties trying to get
              onto the live music scene, Kai wanted to be involved from the
              start to the point of helping promote events before becoming an
              official member of the team. Kai has been instrumental in APUK’s
              early days success and the general running of each event on the
              day.
            </p>
            <h2>Victoria May</h2>
            <p>Event Manager</p>
            <p>
              Vocalist to One Still Standing and founder of Rage Against Cancer
              Festival. After a long discussion following Vic attending our
              first ever solo event, she very quickly wanted to be a part of the
              team to help promote local music and make a difference. Alongside
              Owen, she has been a key player in a very rapid growth overnight
              and will be for the future of Arclight.
            </p>
            <h2>Owen Trott</h2>
            <p>Event Manager</p>
            <p>
              Guitarist to One Still Standing and Event Manager of Rage Against
              Cancer Festival. Owen joined along with Vic having been a part of
              the same conversation. Being a young musician himself he has seen
              the difficulties live music now brings. Although his time in the
              scene has been short, one thing he does not lack is determination
              and we cannot wait to see the difference he will make.
            </p>
            <h2>Position Vacancy</h2>
            <p>Photographer</p>
            <p>
              Due to the recent departures, we have space available on the team.
            </p>
            <p>
              If interested in joining us to become a part of something greater,
              please reach out to us on the contact page, facebook or via&nbsp;
              <a href="mailto:arclightpromotionsuk@gmail.com">
                arclightpromotionsuk@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
