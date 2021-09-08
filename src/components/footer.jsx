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
  return (
    <footer className="footer-background">
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
            <div className="footer-column">
              <h3>Services</h3>
              <Link to="events">
                <h4>Events</h4>
              </Link>
              <Link to="rac-festival">
                <h4>Rac Festival</h4>
              </Link>
            </div>
            <div className="footer-column">
              <h3>Information</h3>
              <Link to="about">
                <h4>About</h4>
              </Link>
              <Link to="team">
                <h4>Team</h4>
              </Link>
              <Link to="partners">
                <h4>Partners</h4>
              </Link>
              <Link to="artists">
                <h4>Artists</h4>
              </Link>
            </div>

            <div className="footer-column">
              <h3>Useful Links</h3>
              <Link to="covid">
                <h4>COVID</h4>
              </Link>
              <Link to="contact">
                <h4>Contact</h4>
              </Link>
            </div>
          </div>
          <div className="footer-links__social">
            <div className="social-row">
              <a href="https://m.me/ArclightPromotionsUK" target="_blank">
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </div>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=447739553611"
                target="_blank"
              >
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </a>
              <a href="mailto:Arclightpromotionsuk@gmail.com">
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://www.instagram.com/arclightpromotionsuk/"
                target="_blank"
              >
                <div className="footer-social-icons">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
              <a
                href="https://www.facebook.com/ArclightPromotionsUK"
                target="_blank"
              >
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
              <Link to="privacy-policy">
                <h4>Privacy Policy</h4>
              </Link>
              <Link to="cookie-policy">
                <h4>Cookie Policy</h4>
              </Link>
            </div>
          </div>
          <div className="footer-info__copyright">
            © Arclight Music {new Date().getFullYear()} | Website & Graphics by
            <a href="https://www.lloydsibson.com/" target="_blank">
              Monocode
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
