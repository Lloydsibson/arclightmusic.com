import React, { useEffect, useState } from "react"
// SASS
import "./eventbrite-api.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

//import HomePageCarousel from "../carousels/homepage-carousel"

const EventbriteEvents = () => {
  const [eventBriteData, setEventBriteData] = useState([])

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
        // // IF EVENT DATA EXISTS...
        if (eventsData.length > 0) {
          for (const loopedEventData of eventsData) {
            // console.log(loopedEventData)
            const eventID = await loopedEventData.id
            // FETCH VENUE INFO
            const venueResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=M3QX3EGISISAIVAZQEGL`
            )
            const venueInfo = await venueResponse.json()
            //console.log(venueInfo)
            const eventCity = venueInfo.venue.address.city

            const eventTime = loopedEventData.start.local
            const eventURL = loopedEventData.url
            const eventImage = loopedEventData.logo.original.url
            //setEventSummary(loopedEventData.summary)
            const eventVenue_AllInfo = venueInfo.venue
            const EventVenueName = eventVenue_AllInfo.name
            const eventDateString = eventTime.split("T")[0]
            //const Year = eventDateString.split("-")[0];
            const monthRaw = eventDateString.split("-")[1]
            let month = ""
            const day = eventDateString.split("-")[2]

            // CONVERTS MONTH NUMBER TO MONTH NAME
            switch (monthRaw) {
              case "01":
                month = "Jan"
                break
              case "02":
                month = "Feb"
                break
              case "03":
                month = "Mar"
                break
              case "04":
                month = "Apr"
                break
              case "05":
                month = "May"
                break
              case "06":
                month = "Jun"
                break
              case "07":
                month = "Jul"
                break
              case "08":
                month = "Aug"
                break
              case "09":
                month = "Sep"
                break
              case "10":
                month = "Oct"
                break
              case "11":
                month = "Nov"
                break
              case "12":
                month = "Dec"
                break
              default:
                month = "..."
            }
            // UPDATE STATE WITH DATA
            setEventBriteData(result => [
              ...result,
              {
                eventLink: `${eventURL}`,
                eventImage: `${eventImage}`,
                eventDay: `${day}`,
                eventMonth: `${month}`,
                eventName: `${loopedEventData.name.text}`,
                eventVenueName: `${EventVenueName}`,
                eventCity: `${eventCity}`,
              },
            ])
          }
        } else {
          document.querySelector(
            ".event-card-container"
          ).innerHTML = `<div><p>No Events. More Coming Soon...</p></div>`
          // DO NOTHING
        }
      } catch (err) {
        //console.log("API - Fetch Failed")
        document.querySelector(
          ".event-card-container"
        ).innerHTML = `<div><p> <span style="font-size: 20px">⚠️</span> An Issue Has Occurred. Please Try again Later</p></div>`
      }
    }
    fetchEventApi()
  }, [])

  return (
    <div className="event-card-container">
      {eventBriteData.map((event, key) => (
        <a href={event.eventLink} target="_blank" key={key}>
          <div
            class="up-card"
            style={{ backgroundImage: `url(${event.eventImage})` }}
          >
            <div class="up-card__overlay"></div>
            <div class="up-card__info">
              <div class="up-date">
                <p class="up-date__day">{event.eventDay}</p>
                <p class="up-date__month">{event.eventMonth}</p>
              </div>
              <h3>{event.eventName}</h3>
            </div>
            <div class="up-card__location">
              <div class="up-card-location-icon">
                <svg
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2806 18.29C0.983282 10.6105 0 9.82235 0 7C0 3.13399 3.13399 0 7 0C10.866 0 14 3.13399 14 7C14 9.82235 13.0167 10.6105 7.7194 18.29C7.37177 18.7922 6.6282 18.7922 6.2806 18.29ZM7 9.91666C8.61084 9.91666 9.91667 8.61084 9.91667 7C9.91667 5.38916 8.61084 4.08333 7 4.08333C5.38916 4.08333 4.08333 5.38916 4.08333 7C4.08333 8.61084 5.38916 9.91666 7 9.91666Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h5 class="up-card-venue-name">{event.eventVenueName}</h5>,{" "}
              <h5 class="up-card-location">{event.eventCity}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default EventbriteEvents
