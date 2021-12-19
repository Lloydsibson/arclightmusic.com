import * as React from "react"
import "./sponsor-banner.scss"

// GA
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const SponsorBanner = ({
  sponsor_link,
  sponsor_title,
  sponsor_text,
  sponsor_cta,
  sponsor_class,
  sponsor_logo,
  sponsor_logo_alt,
}) => {
  const eventButtonHandler = () => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: `EventsPage | Sponsor Banner | ${sponsor_title}`,
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Sponsor Banner",
    })
  }

  return (
    <a href={sponsor_link} className="s-link" onClick={eventButtonHandler}>
      <article className={`s-banner ${sponsor_class}`}>
        <section className="s-banner__text">
          <h3>{sponsor_title}</h3>
          <p>{sponsor_text}</p>
        </section>
        <div className="s-banner__logo">
          <img src={sponsor_logo} alt={sponsor_logo_alt} />
        </div>
        <div className="s-banner__cta">
          <button>{sponsor_cta}</button>
          <p className="ad-reminder mobile">Promoted</p>
        </div>
      </article>
      <p className="ad-reminder desktop">Promoted</p>
    </a>
  )
}

export default SponsorBanner
