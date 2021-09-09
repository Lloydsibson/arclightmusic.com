import React, { useEffect, useState } from "react"
// SASS
import "./eventbrite-api.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

const EventbriteEvents = () => {
  //const [event, setEvent] = useState([])

  useEffect(() => {
    const fetchEventApi = async () => {
      try {
        // FETCH ALL LIVE EVENTS - NEWEST FIRST
        const eventFetch = await fetch(
          `https://www.eventbriteapi.com/v3/organizers/28941769095/events/?status=live&order_by=start_asc&token=M3QX3EGISISAIVAZQEGL`
        )
        const events = await eventFetch.json()
        console.log(events)
        const eventsData = await events.events
        // // IF EVENT DATA EXISTS...
        if (eventsData.length > 0) {
          for (const loopedEventData of eventsData) {
            console.log(loopedEventData)
            const eventID = await loopedEventData.id
            // FETCH VENUE INFO
            const venueResponse = await fetch(
              `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue&token=M3QX3EGISISAIVAZQEGL`
            )
            const venueInfo = await venueResponse.json()
            console.log(venueInfo)
            const eventCity = venueInfo.venue.address.city
            // FETCH TICKET INFO
            //const ticketResponse = await fetch(
            //  `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=ticket_availability&token=M3QX3EGISISAIVAZQEGL`
            //)
            //const ticketInfo = await ticketResponse.json()
            //const soldOut = ticketInfo.ticket_availability.is_sold_out
            // BUILD DATA INTO VAR
            const eventTime = loopedEventData.start.local
            const eventURL = loopedEventData.url
            const eventImage = loopedEventData.logo.original.url
            //setEventSummary(loopedEventData.summary)
            const eventVenue_AllInfo = venueInfo.venue
            const EventVenueName = eventVenue_AllInfo.name
            //setEventTicketPrice(
            //   ticketInfo.ticket_availability.maximum_ticket_price.major_value
            // )
            // TAKES EVENT TIME AND BREAKS IT DOWN INTO TIME, DAY, MONTH & YEAR
            //const eventTimeString = eventTime.split("T")[1]
            //const EventFullTime = eventTimeString.substr(0, eventTimeString.lastIndexOf(":00"))
            const eventDateString = eventTime.split("T")[0]
            //const Year = eventDateString.split("-")[0];
            const month = eventDateString.split("-")[1]
            const day = eventDateString.split("-")[2]

            //<p>{loopedEventData.start.local}</p>

            document.querySelector(".event-card-container").innerHTML += `
              <a href=${eventURL}>
                <div
                  class="up-card"
                  style="background-image: url(${eventImage}); height: 200px"
                >
                 
                </div>
              </a>`
          }
        } else {
          // DO NOTHING
        }
      } catch (err) {
        console.log("API - Fetch Failed")
      }
    }
    fetchEventApi()
  }, [])

  return (
    <div className="event-card-container">
      {/* {event.map((eventData, key) => (
        <div key={key}>{eventData}</div>
      ))} */}
    </div>
  )
}

export default EventbriteEvents

{
  /* <div class="up-card__info">
<div class="up-date">
  <p>${day}</p>
  <p>${month}</p>
</div>
<h3>${loopedEventData.name.text}</h3>
</div>

<div class="up-card__location">
<h5>${EventVenueName}</h5>, <h5>${eventCity}</h5>
</div> */
}

{
  /* <div id="loading-card" className="event-card loading-card">
          <div className="loading-card__inner-container">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5db41714f991e52a4904af5f/1580290822261-NN7W8JLAX28ID4OMSUTA/ke17ZwdGBToddI8pDm48kCwXByxwaOdEO0-22p2r8DQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmKzMD0HmlbxEHfnLJVmhmHrCCom_Dfv2HlCjY3ZYc2tf6N7mt7w3sj11gSs4I68j/Arclight+Promo+Latest+2020+Design.png?format=101w"
              alt="APUK Logo"
            />
          </div>
          <div className="loading-card-text">Loading...</div>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div id="events">
        <a href={eventURL}>
          <div
            className={ticketsSoldOut ? "event-card sold-out" : "event-card"}
          >
            <img src={eventImage} alt="Event" />
            <div className="event-card-info">
              <div className="event-card-info__inner"> */
}
{
  /* {eventName.map((name, key) => (
        <p className="card-title" key={key}>
          {name}
        </p>
      ))} */
}
{
  /* <div className="bulletin-container">
                  <p className="card-status">On Sale</p>
                </div>
                <div className="card-date-container">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p className="card-date">
                    {eventDay}/{eventMonth}/{eventYear} @ {eventFullTime}
                  </p>
                </div>
                <p className="card-event-summary-title">Event Summary</p>
                <p className="card-summary">{eventSummary}</p>
                <div className="card-more-info-container">
                  <div className="card-venue-container">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="card-venue">{eventVenueName}</p>
                  </div>
                  <p className="card-cta">BUY TICKET | £{eventTicketPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </a> */
}
