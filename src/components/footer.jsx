import * as React from "react"
import { Link } from "gatsby"

import "./footer.scss"

import { StaticImage } from "gatsby-plugin-image"

// FONT AWESOME ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const toggleFooterAccordian = e => {
    e.currentTarget.classList.toggle("-open")
  }

  const BackToTopBtn = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <footer className="footer-background">
      <div className="footer-bk-to-top" onClick={BackToTopBtn}>
        <div className="footer-bk-to-top__btn">
          <svg
            className="arrow"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.53366 7.31434L0.193175 2.18092C-0.0643917 1.93335 -0.0643917 1.53196 0.193175 1.28441L0.816057 0.685678C1.07318 0.438522 1.48991 0.438046 1.74765 0.684621L6.00001 4.75294L10.2524 0.684621C10.5101 0.438046 10.9268 0.438522 11.1839 0.685678L11.8068 1.28441C12.0644 1.53198 12.0644 1.93337 11.8068 2.18092L6.46637 7.31434C6.2088 7.56189 5.79122 7.56189 5.53366 7.31434Z"></path>
          </svg>
        </div>
      </div>
      <div className="footer-inner-container">
        <div className="footer-links">
          <div className="footer-links__nav">
            <div className="footer-column logo">
              <Link to="/">
                <StaticImage
                  src="../images/website-logo.png"
                  width={200}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Arclight Music Logo"
                />
              </Link>
            </div>
            <div
              className="footer-column"
              onClick={e => toggleFooterAccordian(e)}
            >
              <h2>Arclight Music</h2>
              <nav
                className="footer-column__list"
                aria-label="footer navigation"
              >
                <ul>
                  <li>
                    <Link to="/events" activeClassName="active">
                      <h3>Events</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/rac-festival" activeClassName="active">
                      <h3>Rac Festival</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/arclight-promotions" activeClassName="active">
                      <h3>Arclight Promotions</h3>
                    </Link>
                  </li>
                  <li>
                    <a href="/arclight-apparel">
                      <h3>Arclight Apparel</h3>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="footer-column"
              onClick={e => toggleFooterAccordian(e)}
            >
              <h2>Information</h2>
              <nav
                className="footer-column__list"
                aria-label="footer navigation"
              >
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
                </ul>
              </nav>
            </div>

            <div
              className="footer-column"
              onClick={e => toggleFooterAccordian(e)}
            >
              <h2>Useful Links</h2>
              <nav
                className="footer-column__list"
                aria-label="footer navigation"
              >
                <ul>
                  <li>
                    <Link to="/covid" activeClassName="active">
                      <h3>COVID</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" activeClassName="active">
                      <h3>Contact</h3>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer-links__social">
            <div className="social-row">
              <a
                href="https://m.me/ArclightPromotionsUK"
                target="_blank"
                rel="noreferrer"
              >
                contact us by facebook messenger
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=447739553611"
                target="_blank"
                rel="noreferrer"
              >
                contact us by whatsapp
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </a>
              <a href="mailto:Arclightpromotionsuk@gmail.com">
                contact us by email
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://www.instagram.com/arclightpromotionsuk/"
                target="_blank"
                rel="noreferrer"
              >
                Follow us on instagram
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/ArclightPromotionsUK"
                target="_blank"
                rel="noreferrer"
              >
                Follow us on facebook
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-info__policies-links">
            <div className="policy-row">
              <Link to="/privacy-policy" activeClassName="active">
                <h3>Privacy Policy</h3>
              </Link>
              <Link to="/cookie-policy" activeClassName="active">
                <h3>Cookie Policy</h3>
              </Link>
            </div>
          </div>
          <div className="footer-info__copyright">
            © Arclight Music {new Date().getFullYear()} | Website & Graphics by
            <a
              href="https://www.lloydsibson.com/"
              target="_blank"
              rel="noreferrer"
            >
              Monocode
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
