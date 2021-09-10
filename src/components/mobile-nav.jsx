import * as React from "react"
import { Link } from "gatsby"

import "./mobile-nav.scss"

// FONT AWESOME ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { faStore } from "@fortawesome/free-solid-svg-icons"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav_inner-container">
        <Link to="/" activeClassName="active">
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faHome} alt="home icon" />
            {/* <p>Home</p> */}
          </div>
        </Link>

        <Link to="/events" activeClassName="active">
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faCalendarAlt} alt="events icon" />
            {/* <p>Events</p> */}
          </div>
        </Link>

        <div className="mobile-nav-icon store">
          <FontAwesomeIcon icon={faStore} alt="store icon" />
          {/* <p>Store</p> */}
        </div>

        <Link to="/contact" activeClassName="active">
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faComment} alt="comment icon" />
            {/* <p>Contact</p> */}
          </div>
        </Link>

        <div className="mobile-nav-icon menu">
          <FontAwesomeIcon icon={faBars} alt="menu icon" />
          {/* <p>Menu</p> */}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
