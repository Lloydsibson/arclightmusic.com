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
  const body = document.body
  const NavItemToggle = () => {
    body.classList.remove("menu-open")
    body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    setTimeout(() => {
      const menu = document.querySelector(".mobile-sidebar")
      menu.style.display = "none"
    }, 400)
  }

  const NavBurgerToggle = () => {
    body.classList.add("menu-open")
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    const menu = document.querySelector(".mobile-sidebar")
    menu.style.display = "flex"
  }

  return (
    <div className="mobile-nav">
      <div className="mobile-nav_inner-container">
        <Link to="/" activeClassName="active" onClick={e => NavItemToggle(e)}>
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faHome} alt="home icon" />
            {/* <p>Home</p> */}
          </div>
        </Link>

        <Link
          to="/events"
          activeClassName="active"
          onClick={e => NavItemToggle(e)}
        >
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faCalendarAlt} alt="events icon" />
            {/* <p>Events</p> */}
          </div>
        </Link>

        <div className="mobile-nav-icon store" onClick={e => NavItemToggle(e)}>
          <FontAwesomeIcon icon={faStore} alt="store icon" />
          {/* <p>Store</p> */}
        </div>

        <Link
          to="/contact"
          activeClassName="active"
          onClick={e => NavItemToggle(e)}
        >
          <div className="mobile-nav-icon">
            <FontAwesomeIcon icon={faComment} alt="comment icon" />
            {/* <p>Contact</p> */}
          </div>
        </Link>

        <div className="mobile-nav-icon menu" onClick={e => NavBurgerToggle(e)}>
          <FontAwesomeIcon icon={faBars} alt="menu icon" />
          {/* <p>Menu</p> */}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
