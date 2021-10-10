import * as React from "react"
import "./info-nav.scss"
import { Link } from "gatsby"

const InfoNav = () => {
  return (
    <aside className="info-nav">
      <div className="info-nav__inner-container">
        <h2>
          <span>Hey.</span> More Info?
        </h2>

        <div className="info-nav-links">
          <h2>Arclight Music</h2>
          <ul>
            <li>
              <Link to="/about" activeClassName="active">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/team" activeClassName="active">
                <h3>Team</h3>
              </Link>
            </li>
            <li>
              <Link to="/partners" activeClassName="active">
                <h3>Partners</h3>
              </Link>
            </li>
            <li>
              <Link to="/artists" activeClassName="active">
                <h3>Artists</h3>
              </Link>
            </li>
            <li>
              <Link to="/arclight-promotions" activeClassName="active">
                <h3>Arclight Promotions</h3>
              </Link>
            </li>
            <li>
              <Link to="/arclight-apparel-info" activeClassName="active">
                <h3>Arclight Apparel</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h2>RAC Festival</h2>
          <ul>
            <li>
              <Link to="/rac-festival" activeClassName="active">
                <h3>Events</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h2>COVID</h2>
          <ul>
            <li>
              <Link to="/covid" activeClassName="active">
                <h3>Latest Information</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h2>Policies</h2>
          <ul>
            <li>
              <Link to="/cookie-policy" activeClassName="active">
                <h3>Cookies</h3>
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" activeClassName="active">
                <h3>Privacy</h3>
              </Link>
            </li>
            <li>
              <Link to="/refunds-and-returns" activeClassName="active">
                <h3>Refunds & Returns</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default InfoNav
