import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import "./mobile-sidebar.scss"

const MobileSideBar = () => {
  return (
    <nav className="mobile-sidebar" aria-label="Mobile navigation">
      <div className="mobile-sidebar__logo">
        <Link to="/">
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
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/team" activeClassName="active">
            Team
          </Link>
        </li>
        <li>
          <Link to="/partners" activeClassName="active">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/artists" activeClassName="active">
            Artists
          </Link>
        </li>
        <li>
          <Link to="/arclight-promotions" activeClassName="active">
            Arclight Promotions
          </Link>
        </li>
        <li>
          <Link to="/arclight-apparel" activeClassName="active">
            Arclight Apparel
          </Link>
        </li>
      </ul>
      <div className="nav-divider" role="presentation"></div>
      <ul className="nav-list section-two">
        <li>
          <Link to="/cookie-policy" activeClassName="active">
            Cookies
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" activeClassName="active">
            Privacy
          </Link>
        </li>
        <li>
          <Link to="/returns-and-refunds" activeClassName="active">
            Returns & Refunds
          </Link>
        </li>
      </ul>
      {/* <div class="mobile-sidebar__footer">
        <Link to="/members" activeClassName="active">
          Members
        </Link>
      </div> */}
    </nav>
  )
}

export default MobileSideBar
