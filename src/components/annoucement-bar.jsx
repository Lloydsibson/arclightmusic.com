import * as React from "react"
import "./annoucement.scss"
import { Link } from "gatsby"

const AnnoucementBar = () => {
  return (
    <div className="annoucement-bar">
      <div className="annoucement-bar__inner-container">
        <Link to="events">
          <h3>
            We're Back! Buy Your Tickets <span>Today</span>
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default AnnoucementBar
