import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import "./header.scss"

import AnnoucementBar from "./annoucement-bar"
import MobileNav from "./mobile-nav"

import CookieBanner from "./cookiebanner"

const Header = () => {
  //console.log(props)
  useEffect(() => {
    // ALTER HEADER ON SCROLL POSITION
    const headerPosition = () => {
      if (window.scrollY > 90) {
        //console.log("MORE then 129")
        document.querySelector(".header-container").classList.add("slim")
      } else {
        //console.log("LESS then 129")
        document.querySelector(".header-container").classList.remove("slim")
      }
    }

    document.addEventListener("scroll", () => {
      headerPosition()
    })
    ///////
  }, [])

  const onMouseLeaveHandler = e => {
    e.currentTarget.classList.remove("-open")
  }
  const onClickHandler = e => {
    e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.toggle(
      "-open"
    )
  }
  // const onKeyPressHandler = e => {
  //   e.currentTarget.parentNode.parentNode.parentNode.classList.toggle("-open")
  // }

  return (
    <>
      <div className="header-container">
        <AnnoucementBar />
        <header onMouseLeave={e => onMouseLeaveHandler(e)} role="presentation">
          <div className="logo-container">
            <h1>
              <Link to="/">
                <StaticImage
                  src="../images/website-logo.png"
                  width={178}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Arclight Music"
                />
              </Link>
            </h1>
          </div>
          <nav
            className="links-container desktop"
            aria-label="header navigation"
          >
            <ul>
              <li>
                <Link
                  to="/events"
                  activeClassName="active"
                  className="nav-link"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/rac-festival"
                  activeClassName="active"
                  className="nav-link"
                >
                  RAC Festival
                </Link>
              </li>
              <li>
                <Link to="/covid" activeClassName="active" className="nav-link">
                  COVID
                </Link>
              </li>
              <li>
                <div
                  className="dropdown more nav-link"
                  onClick={e => onClickHandler(e)}
                  // onKeyDown={e => onKeyPressHandler(e)}
                  role="button"
                >
                  More
                  <svg
                    className="arrow"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.53366 7.31434L0.193175 2.18092C-0.0643917 1.93335 -0.0643917 1.53196 0.193175 1.28441L0.816057 0.685678C1.07318 0.438522 1.48991 0.438046 1.74765 0.684621L6.00001 4.75294L10.2524 0.684621C10.5101 0.438046 10.9268 0.438522 11.1839 0.685678L11.8068 1.28441C12.0644 1.53198 12.0644 1.93337 11.8068 2.18092L6.46637 7.31434C6.2088 7.56189 5.79122 7.56189 5.53366 7.31434Z" />
                  </svg>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  activeClassName="active"
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="sub-nav more">
            <div className="sub-nav__inner-container">
              <h4>Arclight Music</h4>
              <nav aria-label="sub navigation">
                <ul>
                  <Link to="/" activeClassName="active">
                    <li>Home</li>
                  </Link>
                  <Link to="/events" activeClassName="active">
                    <li>Events</li>
                  </Link>
                  <Link to="/rac-festival" activeClassName="active">
                    <li>RAC Festival</li>
                  </Link>
                  <Link to="/arclight-promotions" activeClassName="active">
                    <li>Arclight Promotions</li>
                  </Link>
                  <Link to="/arclight-apparel-info" activeClassName="active">
                    <li>Arclight Apparel</li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="sub-nav__inner-container">
              <h4>Information</h4>
              <nav aria-label="sub navigation">
                <ul>
                  <Link to="/about" activeClassName="active">
                    <li>About</li>
                  </Link>
                  <Link to="/team" activeClassName="active">
                    <li>Team</li>
                  </Link>
                  <Link to="/partners" activeClassName="active">
                    <li>Partners</li>
                  </Link>
                  <Link to="/artists" activeClassName="active">
                    <li>Artists</li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="sub-nav__inner-container">
              <h4>Policies</h4>
              <nav aria-label="sub navigation">
                <ul>
                  <Link to="/cookie-policy" activeClassName="active">
                    <li>Cookies</li>
                  </Link>
                  <Link to="/privacy-policy" activeClassName="active">
                    <li>Privacy</li>
                  </Link>
                  <Link to="/refunds-and-returns" activeClassName="active">
                    <li>Refunds & Returns</li>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="sub-nav__inner-container">
              <h4>Useful Links</h4>
              <nav aria-label="sub navigation">
                <ul>
                  <Link to="/covid" activeClassName="active">
                    <li>COVID</li>
                  </Link>
                  <Link to="/contact" activeClassName="active">
                    <li>Contact</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <MobileNav />
      <CookieBanner />
    </>
  )
}

export default Header
