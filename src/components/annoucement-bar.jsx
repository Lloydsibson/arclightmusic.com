import * as React from "react"
import "./annoucement.scss"
import { Link } from "gatsby"

import PagePositionScrollBar from "./PagePositionScrollBar"

const AnnoucementBar = () => {
  return (
    <>
      <div className="annoucement-bar">
        <div className="annoucement-bar__inner-container">
          <Link to="https://arclightmusic-25219482.hubspotpagebuilder.eu/trustpilot-15-percent-offer">
            <h3>
              Leave a review & get <span>15% off</span> our store
            </h3>
          </Link>
        </div>
      </div>
      <PagePositionScrollBar />
    </>
  )
}

export default AnnoucementBar
