import React, { useEffect, useState } from "react"
// SASS
//import "./eventbrite-api.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const EventPageEventbriteAPI = () => {
  const [numberOfCurrentEvents, setNumberOfCurrentEvents] = useState()
  const [eventBriteAPIData, setEventBriteAPIData] = useState([])

  console.log(eventBriteAPIData)

  useEffect(() => {
    const fetchEventApi = async () => {
      try {
        // FETCH ALL LIVE EVENTS - NEWEST FIRST
        const eventFetch = await fetch(
          `https://www.eventbriteapi.com/v3/organizers/28941769095/events/?status=live&order_by=start_asc&token=M3QX3EGISISAIVAZQEGL`
        )
        const events = await eventFetch.json()
        //console.log(events)
        const eventsData = await events.events
        setNumberOfCurrentEvents(eventsData.length)

        // // IF EVENT DATA EXISTS...
        if (eventsData.length > 0) {
          for (const loopedEventData of eventsData) {
            //console.log(loopedEventData)
            const eventID = await loopedEventData.id
            //console.log(eventTitle)
            //FETCH VENUE INFO
            const venueResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=M3QX3EGISISAIVAZQEGL`
            )
            const venueInfo = await venueResponse.json()
            //console.log(venueInfo)
            // FETCH TICKET INFO
            const ticketResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=ticket_availability&token=M3QX3EGISISAIVAZQEGL`
            )
            const ticketInfo = await ticketResponse.json()
            //console.log(ticketInfo)
            // FETCH CATEGORY INFO
            const categoryResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=subcategory&token=M3QX3EGISISAIVAZQEGL`
            )
            const CategoryInfo = await categoryResponse.json()
            //console.log(CategoryInfo)
            const eventTimeRaw = loopedEventData.start.local
            const eventFullTime = eventTimeRaw.split("T")[1]
            const eventDateString = eventTimeRaw.split("T")[0]
            //const Year = eventDateString.split("-")[0];
            const monthRaw = eventDateString.split("-")[1]
            let eventMonth = ""
            // CONVERTS MONTH NUMBER TO MONTH NAME
            switch (monthRaw) {
              case "01":
                eventMonth = "Jan"
                break
              case "02":
                eventMonth = "Feb"
                break
              case "03":
                eventMonth = "Mar"
                break
              case "04":
                eventMonth = "Apr"
                break
              case "05":
                eventMonth = "May"
                break
              case "06":
                eventMonth = "Jun"
                break
              case "07":
                eventMonth = "Jul"
                break
              case "08":
                eventMonth = "Aug"
                break
              case "09":
                eventMonth = "Sept"
                break
              case "10":
                eventMonth = "Oct"
                break
              case "11":
                eventMonth = "Nov"
                break
              case "12":
                eventMonth = "Dec"
                break
              default:
                eventMonth = "N/A"
            }
            const eventURL = loopedEventData.url
            const eventImage = loopedEventData.logo.original.url
            const eventTitle = loopedEventData.name.text
            const eventVenueName = venueInfo.venue.name
            const eventSubCategory = CategoryInfo.subcategory.name
            const eventSummary = loopedEventData.description.text
            const eventDay = eventDateString.split("-")[2]
            let eventTime = eventFullTime.slice(0, 5)
            const eventTicketPrice =
              ticketInfo.ticket_availability.maximum_ticket_price.major_value

            setEventBriteAPIData(result => [
              ...result,
              {
                eventURL: `${eventURL}`,
                eventImage: `${eventImage}`,
                eventTitle: `${eventTitle}`,
                eventVenueName: `${eventVenueName}`,
                eventSubCategory: `${eventSubCategory}`,
                eventSummary: `${eventSummary}`,
                eventDay: `${eventDay}`,
                eventMonth: `${eventMonth}`,
                eventTime: `${eventTime}`,
                eventTicketPrice: `£${eventTicketPrice}`,
              },
            ])
          }
        } else {
        }
      } catch (err) {}
    }
    fetchEventApi()
  }, [])

  // SHARE BUTTON FUNCTIONALITY
  const shareButtonHandler = e => {
    const cardURL = e.currentTarget.nextSibling.lastChild.getAttribute("href")
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

  return (
    <div className="events-page">
      <div className="events-page__inner-container">
        <div className="events-title-container">
          <div className="events-title-container__title">
            <h1>Events</h1>
            <div id="events-counter">
              {numberOfCurrentEvents > 0 ? numberOfCurrentEvents : 0}
            </div>
          </div>
          <div className="events-title-container__filters">
            <label htmlFor="CatSelect">Categories:</label>
            <select id="CatSelect">
              <option>All</option>
              <option>Rock</option>
              <option>Metal</option>
              <option>Alt</option>
              <option>Other</option>
            </select>
            <a href="https://www.eventbrite.co.uk/o/arclight-promotions-uk-28941769095">
              <h3>Past Events</h3>
            </a>
          </div>
        </div>
        <div className="eventpage-card-container">
          {eventBriteAPIData.map((data, key) => (
            <div className="event-card" key={key}>
              <div className="event-card__poster">
                <img src={data.eventImage} alt="event poster" />
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
                    <h4>{data.eventVenueName}</h4>
                  </div>
                  <div className="event-tag-container__category">
                    <h4>{data.eventSubCategory}</h4>
                  </div>
                </div>

                <p className="event-summary">{data.eventSummary}</p>
                <div className="event-time-container">
                  <p>Start Time</p>
                  <h5>
                    {data.eventDay} {data.eventMonth}, {data.eventTime}
                  </h5>
                </div>

                <div className="event-card-footer-container">
                  <div
                    className="event-card-footer-container__share"
                    onClick={e => shareButtonHandler(e)}
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
                  <div className="event-card-footer-container__cta">
                    <h5>{data.eventTicketPrice}</h5>
                    <a href={data.eventURL}>
                      <button>Buy Tickets</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventPageEventbriteAPI
