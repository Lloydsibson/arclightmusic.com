import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import InfoNav from "../components/info-nav"

const CovidPage = () => {
  return (
    <Layout>
      <Seo
        title="COVID"
        description="Information about the latest COVID procedures at our events"
      />
      <div className="information-page">
        <div className="information-page__inner-container">
          <InfoNav />
          <article className="information">
            <h1>COVID Policy</h1>
            <p>
              With the recent announcement from the Government regarding the
              re-opening of venues, we felt it best to put forward our
              guidelines on COVID safety and our policies moving forward.
            </p>
            <p>
              We have been working closely with our partners on this and for
              now, we will be hosting any and all shows solely with The Shed in
              Leicester whilst we iron out our COVID Policy. We will look at
              expanding back into other venues once we are confident there is
              nothing further we can do to keep you all, and our team, safe.
            </p>
            <h2>1) Masks</h2>
            <p>
              These will be encouraged in all communal areas when entering and
              leaving the venue. This will not be enforced however we do
              encourage all fans to use their own common sense to make the best
              decisions on this. You are all welcome to discard your masks once
              inside the venue until you leave.
            </p>
            <h2>2) Payments</h2>
            <p>
              All payments must be cashless. We will NOT be accepting cash for
              any reason to keep in line with the venue’s policy on this.
              Payment can be made for drinks, snacks, merch and entry via the
              following means;
            </p>
            <p>A) Online Advance (Tickets/Entry Only)</p>
            <p>B) Card (Contactless or Chip & Pin)</p>
            <p>C) GooglePay or ApplePay</p>
            <h2>3) Entry/Exit</h2>
            <p>
              We will be running a one way system around the venue to ensure
              safety before, during and after the event. All fans and staff will
              be expected to follow the system. Anyone found to be going the
              wrong way, will be asked to return and go back around.
            </p>
            <h2>4) COVID Passports</h2>
            <p>
              Due to some recent events, COVID passports and evidence of
              vaccination will no longer be accepted as proof enough to enter
              the venue. In order to gain entry, you will need to provide one of
              the following;
            </p>
            <p>
              1) Proof of a negative COVID test taken within 48 hours prior to
              the show starting. This can be either form of COVID test.
            </p>
            <p>
              2) Agree to take a Lateral Flow test on the door before being
              granted entry.
              <span>
                &nbsp;(NOTE: We will only have limited number of tests available
                on the door so please try where possible to take a test in
                advance or bring one with you. Boots and all Pharmacies are able
                to provide them free of charge).
              </span>
            </p>
            <p>
              Should you be unable to provide evidence and reject a test on the
              door, we will not be able to permit you entry to the venue and no
              refunds will be given due to the limited number of spaces
              available and costs needing covering.
            </p>
            <p>
              All members of the venue & Arclight teams will also be required to
              provide the same evidence. Failure to do so will result in staff
              being asked to leave the venue.
            </p>
            <h2>5) Illness</h2>
            <p>
              If you begin to exhibit signs of a persistent cough and a running
              nose during the event, you may be asked to leave or to retake a
              COVID test.
            </p>
            <h2>And...</h2>
            <p>
              We understand that social distancing will be removed as of 19th
              July 2021 and we are all looking forward to seeing friends,
              enjoying music and maybe starting a mosh pit or two…..however we
              do encourage you to use your common sense with regards to not only
              yours, but other peoples safety during your interactions with
              staff and other fans throughout our events.
            </p>
            <p>
              Should none of these guidelines be followed, our team and the
              venue reserve the right to remove you from the venue immediately
              without warning.
            </p>
            <p>
              Due to limitations on numbers allowed in the venue to promote
              safety, refunds will not be granted if we have to remove you from
              the venue as we do still have costs to cover and removal was
              caused by your own negligence. Refunds on advanced tickets between
              doors opening and the event beginning will be decided on a case by
              case basis by management.
            </p>
            <p>
              We will review these guidelines after every show to ensure that
              everything possible is being done to keep everyone safe and secure
              whilst our world returns to normal during uncertain times.
            </p>
            <p>Stay safe and we can’t wait to welcome you all back!</p>
            <p>The Arclight Music Team</p>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default CovidPage
