import React, { useEffect, useState } from "react"
import "./cookiebanner.scss"
import { Link } from "gatsby"

const CookieBanner = () => {
  const [cookieMessage, setCookieMessage] = useState<boolean>(true)

  //RUN FUNCTION ONCE DOM HAS LOADED
  useEffect(() => {
    if (
      localStorage.getItem("Arclightmusic.co.uk-CookiePolicy") === "accepted"
    ) {
      // DO NOTHING
    } else {
      //SETS FADE IN DELAY WITH OPACITY CSS
      setTimeout(() => {
        setCookieMessage(false)
      }, 1500)
    }
  }, [])

  const CookieHandler = () => {
    localStorage.setItem("Arclightmusic.co.uk-CookiePolicy", "accepted")
    setCookieMessage(true)
  }

  return (
    <div id="cookie-message" className={cookieMessage ? "-close" : ""}>
      <div className="cookie-container">
        <div className="cookie-container__cookies-left">
          <p>
            We use cookies to personalize your use of our site. This includes
            third-party cookies for that we use for advertising and site
            analytics.
          </p>
          <p>
            See our&nbsp;
            <Link to="/privacy-policy">Privacy Policy</Link>
            &nbsp;and&nbsp;<Link to="/cookie-policy">Cookie Policy</Link> for
            more information on how we collect and use data.
          </p>
        </div>
        <div className="cookie-container__cookies-right">
          <div id="cookie-accept" onClick={CookieHandler}>
            Continue
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
