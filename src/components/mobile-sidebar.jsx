import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import "./mobile-sidebar.scss"

// FONT AWESOME ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore } from "@fortawesome/free-solid-svg-icons"

const MobileSideBar = () => {
  const html = document.documentElement
  const NavItemToggle = () => {
    html.classList.remove("menu-open")
    html.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    // REMOVES MOBILE NAV AFTER NAV CLOSES
    setTimeout(() => {
      const menu = document.querySelector(".mobile-sidebar")
      menu.style.display = "none"
    }, 400)
  }
  return (
    <nav className="mobile-sidebar" aria-label="Mobile navigation">
      <div className="mobile-sidebar__logo">
        <Link to="/" onClick={e => NavItemToggle(e)}>
          <StaticImage
            src="../images/website-logo.png"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="arclight logo"
          />
        </Link>
      </div>
      <ul className="nav-list section-one">
        <li>
          <Link to="/" activeClassName="active" onClick={e => NavItemToggle(e)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/partners"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Partners
          </Link>
        </li>
        <li>
          <Link
            to="/artists"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Artists
          </Link>
        </li>
        <li>
          <Link
            to="/arclight-promotions"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Arclight Promotions
          </Link>
        </li>
        <li>
          <Link
            to="/arclight-apparel"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Arclight Apparel
          </Link>
        </li>
      </ul>
      <div className="nav-divider" role="presentation"></div>
      <ul className="nav-list section-two">
        <li>
          <Link
            to="/cookie-policy"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Cookies
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            to="/returns-and-refunds"
            activeClassName="active"
            onClick={e => NavItemToggle(e)}
          >
            Returns & Refunds
          </Link>
        </li>
      </ul>

      <div className="mobile-nav-cta">
        <div className="mobile-nav-cta__inner-container">
          <div className="mobile-nav-cta-icon">
            <FontAwesomeIcon icon={faStore} alt="mobile nav store icon" />
          </div>
          <p className="mobile-nav-cta-title">Store Coming Soon</p>
          <p className="mobile-nav-cta-text">
            Limited Editions runs and collaboration merchandise you won’t find
            anywhere else
          </p>
        </div>
      </div>
      {/* <div class="mobile-sidebar__footer">
        <Link to="/members" activeClassName="active">
          Members
        </Link>
      </div> */}
    </nav>
  )
}

export default MobileSideBar
