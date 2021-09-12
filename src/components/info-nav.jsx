import * as React from "react"
import "./info-nav.scss"
import { Link } from "gatsby"

const InfoNav = () => {
  return (
    <div className="info-nav">
      <div className="info-nav__inner-container">
        <h2>
          <span>Hey.</span> More Info?
        </h2>

        <div className="info-nav-links">
          <h3>Arclight Music</h3>
          <ul>
            <li>
              <Link to="/about" activeClassName="active">
                <h4>About</h4>
              </Link>
            </li>
            <li>
              <Link to="/team" activeClassName="active">
                <h4>Team</h4>
              </Link>
            </li>
            <li>
              <Link to="/partners" activeClassName="active">
                <h4>Partners</h4>
              </Link>
            </li>
            <li>
              <Link to="/artists" activeClassName="active">
                <h4>Artists</h4>
              </Link>
            </li>
            <li>
              <Link to="/arclight-promotions" activeClassName="active">
                <h4>Arclight Promotions</h4>
              </Link>
            </li>
            <li>
              <Link to="/arclight-apparel" activeClassName="active">
                <h4>Arclight Apparel</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h3>RAC Festival</h3>
          <ul>
            <li>
              <Link to="/rac-festival" activeClassName="active">
                <h4>Events</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h3>COVID</h3>
          <ul>
            <li>
              <Link to="/covid" activeClassName="active">
                <h4>Latest Information</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-nav-links">
          <h3>Policies</h3>
          <ul>
            <li>
              <Link to="/cookie-policy" activeClassName="active">
                <h4>Cookies</h4>
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" activeClassName="active">
                <h4>Privacy</h4>
              </Link>
            </li>
            <li>
              <Link to="/refunds-and-returns" activeClassName="active">
                <h4>Refunds & Returns</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoNav
