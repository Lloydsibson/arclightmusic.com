import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const AboutPage = () => {
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
            <h2>Arclight Music was founded in 2019 with 2 main aims:</h2>
            <p>
              <span>1.</span> To help give younger musicians more opportunity to
              get experience performing and the chance to showcase themselves.
              <br />
              <span>2.</span> To help improve funding in music education to
              provide a better chance for underprivileged children whos families
              can’t afford the cost of learning to play an instrument
            </p>
            <h2>Education</h2>
            <p>
              For years now, funding in education has been on a downward spiral
              leaving schools with less money to spend where it is needed. This
              means cuts have to be made and the first to go is generally music
              and the arts as they are not considered a necessity in education.
            </p>
            <p>
              We at Arclight disagree. Music is a fundamental part of growing
              up, everyone has had their phase one way or another. Not only
              this, but music has been proven to play a key role in helping to
              improve mental health, whether this be listening to music or
              playing it.
            </p>
            <p>
              Our aim is to take all profits from events ran and donate these
              back into Music education to help create a stable future for live
              music and give everyone the chance to play their part.
            </p>
            <h2>Young Performers</h2>
            <p>
              Live music is a brutal industry. Many see it as a way to make easy
              money doing what you love, to a degree it is but not without the
              work and experience needed to survive in it which for many young
              musicians, isn’t possible due to their age.
            </p>
            <p>
              This is where Arclight comes in. We aim to host events where young
              musicians can get the chance to perform supporting much larger
              names from big local bands to touring artists to provide a chance
              for everyone to do what they love. This will come in 3 forms;
            </p>
            <p>
              <span>Break the Mold</span> - This is created to put young
              musicians on stage with larger names to help put their name out
              there and give them the chance to help create a name for
              themselves and become a financially stable brand.
            </p>
            <p>
              <span>Gen-Nex</span> - A networking event created for musicians,
              by musicians. Here everyone can relax, have a drink and meet with
              professional musicians, industry experts and more to build your
              contact list. This is free entry for all and specially designed to
              be relaxed and comfortable for everyone. By attending one of these
              events, you will automatically be entered into a prize draw to win
              prizes provided by our partners ranging from a free studio day to
              radio air time and slots playing on major line ups.
            </p>
            <p>
              <span>INspire</span> - A newcomers afternoon for younger musicians
              to play on a stage in front of friends, family and the friendly
              APUK community to help you build your confidence on stage in a
              safe and relaxed environment getting you ready for the world of
              live performance. All equipment will be provided for you with the
              exception of your instrument however some arrangements can be made
              if needed (please contact the APUK team for information).
            </p>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
