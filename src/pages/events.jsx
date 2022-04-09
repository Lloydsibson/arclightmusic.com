import React from "react"

//import Link from "gatsby"
import "./events.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

import s_banner_amuk from "../images/s-banner-amuk.png"

import { APIData } from "/src/Context"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import SponsorBanner from "../components/sponsor-banner"

const EventsPage = () => {
  // CATEGORY FILTER
  const catFilterHandler = e => {
    //console.log(e.currentTarget.value)
    const currentSelectedOption = e.currentTarget.value.toString()
    const allEventCards = document.querySelectorAll(".event-card")
    if (currentSelectedOption === "All") {
      allEventCards.forEach(card => {
        //console.log(card.dataset.category)
        card.classList.remove("hide")
      })
    } else {
      allEventCards.forEach(card => {
        //console.log(card.dataset.category)
        card.dataset.category == currentSelectedOption
          ? card.classList.remove("hide")
          : card.classList.add("hide")
      })
    }
  }

  // SHARE BUTTON FUNCTIONALITY
  const shareButtonHandler = (e, eventURL) => {
    const cardURL = eventURL
    //console.log(cardURL);
    if (navigator.share) {
      navigator
        .share({
          title: "Arclight Music - Upcoming Event",
          url: `${cardURL}`,
        })
        .then(() => {
          // DO NOTHING
        })
        .catch(console.error)
    } else {
      // fallback
      alert(
        "Your Current Browser Doesn't Support Sharing. Please Try Another Browser"
      )
    }
  }

  const eventButtonHandler = (e, eventURL, eventTitle) => {
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: `EventsPage | Buy Button | ${eventTitle}`,
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Eventbrite Event",
    })
    window.location.href = eventURL
  }

  return (
    <Layout>
      <Seo
        title="Events"
        description="Buy tickets for upcoming events, see the latest event information and 
        find out more about your favourite bands and venues..."
      />
      <APIData.Consumer>
        {value => (
          <div className="events-page">
            <div className="events-page__inner-container">
              <SponsorBanner
                sponsor_link="/arclight-apparel"
                sponsor_class="stock"
                sponsor_title="Arclight Apparel"
                sponsor_text={
                  <>
                    Band merchandise you wont find anywhere else.&nbsp;
                    <span>Support your local scene today!</span>
                  </>
                }
                sponsor_cta="Shop Now"
                sponsor_logo={s_banner_amuk}
                sponsor_logo_alt="Arclight Music Logo"
              />
              <div className="events-title-container">
                <div className="events-title-container__title">
                  <div id="events-counter">
                    {value[1].numberOfCurrentEvents > 0
                      ? value[1].numberOfCurrentEvents
                      : 0}
                  </div>
                  <h1>Events</h1>
                </div>
                <div className="events-title-container__filters">
                  <label htmlFor="CatSelect">Genre:</label>
                  <div className="CatSelect-container">
                    <select id="CatSelect" onChange={e => catFilterHandler(e)}>
                      <option>All</option>
                      <option>Acoustic</option>
                      <option>Alternative</option>
                      <option>Americana</option>
                      <option>Bluegrass</option>
                      <option>Blues</option>
                      <option>Blues & Jazz</option>
                      <option>Classical</option>
                      <option>Cultural</option>
                      <option>DJ/Dance</option>
                      <option>EDM</option>
                      <option>EDM / Electronic</option>
                      <option>Electronic</option>
                      <option>Experimental</option>
                      <option>Folk</option>
                      <option>Hip Hop / Rap</option>
                      <option>Indie</option>
                      <option>Jazz</option>
                      <option>Latin</option>
                      <option>Metal</option>
                      <option>Opera</option>
                      <option>Other</option>
                      <option>Pop</option>
                      <option>Psychedelic</option>
                      <option>Punk/Hardcore</option>
                      <option>R&B</option>
                      <option>Reggae</option>
                      <option>Religious/Spiritual</option>
                      <option>Rock</option>
                      <option>Singer/Songwriter</option>
                      <option>Top 40</option>
                      <option>World</option>
                    </select>
                    <svg
                      height="14px"
                      width="12.25px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chevron-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-chevron-down fa-w-14"
                    >
                      <path
                        fill="currentColor"
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      ></path>
                    </svg>
                  </div>
                  <a href="https://www.eventbrite.co.uk/o/arclight-promotions-uk-28941769095">
                    <h2>Past Events</h2>
                  </a>
                </div>
              </div>
              <div className="eventpage-card-container">
                <p
                  className={`loading-message ${
                    value[3].apiLoaded ? "loaded" : ""
                  }`}
                >
                  {value[2].loadingMessage}
                </p>
                <div
                  className={`eventpage-card-container__events ${
                    value[3].apiLoaded ? "loaded" : ""
                  }`}
                >
                  {value[0].eventBriteState.map((data, key) => (
                    <article
                      className="event-card"
                      key={key}
                      data-category={data.eventSubCategory}
                    >
                      <div className="event-card__poster">
                        {/* <img src={data.eventImage} alt="event poster" /> */}
                        <div
                          className="event-img"
                          style={{ backgroundImage: `url(${data.eventImage})` }}
                          role="img"
                        ></div>
                      </div>
                      <div className="event-card__information">
                        <h2>{data.eventTitle}</h2>
                        <div className="event-tag-container">
                          <div className="event-tag-container__venue">
                            <div className="venue-map-icon">
                              <div className="venue-map-icon__map">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                              </div>
                            </div>
                            <h3>{data.eventVenueName}</h3>
                          </div>
                          <div className="event-tag-container__category">
                            <h3>{data.eventSubCategory}</h3>
                          </div>
                        </div>

                        <p className="event-summary">{data.eventSummary}</p>
                        <div className="event-time-container">
                          <p>Start Time</p>
                          <h4>
                            {data.eventDay} {data.eventMonth}, {data.eventTime}
                          </h4>
                        </div>

                        <div className="event-card-footer-container">
                          <div className="event-card-footer-container__inner-container">
                            <div
                              className="event-card-footer-container__share"
                              onClick={e =>
                                shareButtonHandler(e, data.eventURL)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="43"
                                height="43"
                                viewBox="0 0 43 43"
                                fill="none"
                              >
                                <circle
                                  cx="21.5"
                                  cy="21.5"
                                  r="20.5"
                                  stroke="#D1D1D1"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M26.5 25C25.4403 25 24.4662 25.3665 23.6973 25.9795L18.8933 22.9769C19.0356 22.3334 19.0356 21.6666 18.8933 21.023L23.6973 18.0205C24.4662 18.6335 25.4403 19 26.5 19C28.9853 19 31 16.9853 31 14.5C31 12.0147 28.9853 10 26.5 10C24.0147 10 22 12.0147 22 14.5C22 14.8355 22.037 15.1623 22.1067 15.4769L17.3027 18.4795C16.5338 17.8665 15.5597 17.5 14.5 17.5C12.0147 17.5 10 19.5147 10 22C10 24.4853 12.0147 26.5 14.5 26.5C15.5597 26.5 16.5338 26.1335 17.3027 25.5205L22.1067 28.5231C22.0357 28.8439 21.9999 29.1714 22 29.5C22 31.9853 24.0147 34 26.5 34C28.9853 34 31 31.9853 31 29.5C31 27.0147 28.9853 25 26.5 25Z"
                                  fill="#D1D1D1"
                                />
                              </svg>
                              <p>Share</p>
                            </div>
                            <div className="event-card-footer-container__price">
                              <h4>{data.eventTicketPrice}</h4>
                            </div>
                          </div>
                          <div className="event-card-footer-container__btn">
                            <button
                              onClick={e =>
                                eventButtonHandler(
                                  e,
                                  data.eventURL,
                                  data.eventTitle
                                )
                              }
                            >
                              Buy Tickets
                            </button>
                            {/* <a href={data.eventURL}>
                            <button onClick={}>Buy Tickets</button>
                          </a> */}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </APIData.Consumer>
    </Layout>
  )
}

export default EventsPage
